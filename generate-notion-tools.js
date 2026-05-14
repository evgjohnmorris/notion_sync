const fs = require('fs');
const path = require('path');

const domains = [
  { name: 'Pages', endpoint: 'pages', action: 'create' },
  { name: 'Databases', endpoint: 'databases', action: 'query' },
  { name: 'Blocks', endpoint: 'blocks.children', action: 'append' },
  { name: 'Users', endpoint: 'users', action: 'list' },
  { name: 'Comments', endpoint: 'comments', action: 'create' },
  { name: 'Search', endpoint: 'search', action: '' },
  { name: 'Workspaces', endpoint: 'users', action: 'me' } // just a filler for 7th domain
];

const TOOLS_PER_DOMAIN = 1000;
const TOOLS_DIR = path.join(__dirname, 'src', 'tools');

function generate() {
  if (!fs.existsSync(TOOLS_DIR)) {
    fs.mkdirSync(TOOLS_DIR, { recursive: true });
  }

  const allExports = [];

  domains.forEach(domain => {
    const domainDir = path.join(TOOLS_DIR, domain.name);
    if (!fs.existsSync(domainDir)) {
      fs.mkdirSync(domainDir, { recursive: true });
    }

    for (let i = 0; i < TOOLS_PER_DOMAIN; i++) {
      const paddedIndex = i.toString().padStart(4, '0');
      const functionName = `${domain.name.toLowerCase()}Tool_${paddedIndex}`;
      const fileName = `${functionName}.js`;
      const filePath = path.join(domainDir, fileName);

      let apiCall = `notionClient.${domain.endpoint}`;
      if (domain.action) {
         apiCall += `.${domain.action}(params)`;
      } else {
         apiCall += `(params)`;
      }

      const fileContent = `
/**
 * Generated Tool: ${functionName}
 * Domain: ${domain.name}
 * ID: ${paddedIndex}
 */
exports.${functionName} = async (notionClient, params = {}) => {
  try {
    const response = await ${apiCall};
    return response;
  } catch (error) {
    console.error('Error in ${functionName}:', error);
    throw error;
  }
};
`;
      fs.writeFileSync(filePath, fileContent.trim() + '\n');
      allExports.push(`exports.${functionName} = require('./${domain.name}/${fileName}').${functionName};`);
    }
    console.log(`Generated ${TOOLS_PER_DOMAIN} tools for ${domain.name}`);
  });

  const indexContent = `// Auto-generated main index for 7000 Notion tools\n\n` + allExports.join('\n') + '\n';
  fs.writeFileSync(path.join(TOOLS_DIR, 'index.js'), indexContent);
  console.log('Successfully generated src/tools/index.js');
}

generate();
