console.log('Loading 7,000 Notion tools...');
const start = Date.now();
const tools = require('./src/tools/index.js');
const end = Date.now();

const keys = Object.keys(tools);
console.log(`Successfully loaded ${keys.length} tools in ${end - start}ms`);
console.log('Sample tools:', keys.slice(0, 5));
