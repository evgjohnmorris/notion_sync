/**
 * Parses a simple Markdown string into an array of Notion Block objects.
 * Supports headings, bulleted lists, and paragraphs.
 * 
 * @param {string} markdown - The markdown text to parse.
 * @returns {Array<Object>} An array of Notion block objects.
 */
function markdownToNotionBlocks(markdown) {
    if (!markdown || typeof markdown !== 'string') return [];

    const lines = markdown.split('\n');
    const blocks = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue; // Skip empty lines

        if (trimmed.startsWith('# ')) {
            blocks.push({
                object: 'block',
                type: 'heading_1',
                heading_1: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(2).trim() } }]
                }
            });
        } else if (trimmed.startsWith('## ')) {
            blocks.push({
                object: 'block',
                type: 'heading_2',
                heading_2: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(3).trim() } }]
                }
            });
        } else if (trimmed.startsWith('### ')) {
            blocks.push({
                object: 'block',
                type: 'heading_3',
                heading_3: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(4).trim() } }]
                }
            });
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            blocks.push({
                object: 'block',
                type: 'bulleted_list_item',
                bulleted_list_item: {
                    rich_text: [{ type: 'text', text: { content: trimmed.substring(2).trim() } }]
                }
            });
        } else {
            blocks.push({
                object: 'block',
                type: 'paragraph',
                paragraph: {
                    rich_text: [{ type: 'text', text: { content: trimmed } }]
                }
            });
        }
    }

    return blocks;
}

module.exports = {
    markdownToNotionBlocks
};
