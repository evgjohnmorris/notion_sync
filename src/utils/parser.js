function parseMarkdownToBlocks(markdownText) {
    if (!markdownText) return [];
    const lines = markdownText.split('\n');
    const blocks = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (line.startsWith('# ')) {
            blocks.push({
                object: 'block',
                type: 'heading_1',
                heading_1: { rich_text: [{ type: 'text', text: { content: line.substring(2).trim() } }] }
            });
        } else if (line.startsWith('## ')) {
            blocks.push({
                object: 'block',
                type: 'heading_2',
                heading_2: { rich_text: [{ type: 'text', text: { content: line.substring(3).trim() } }] }
            });
        } else if (line.startsWith('### ')) {
            blocks.push({
                object: 'block',
                type: 'heading_3',
                heading_3: { rich_text: [{ type: 'text', text: { content: line.substring(4).trim() } }] }
            });
        } else if (line.startsWith('- ')) {
            blocks.push({
                object: 'block',
                type: 'bulleted_list_item',
                bulleted_list_item: { rich_text: [{ type: 'text', text: { content: line.substring(2).trim() } }] }
            });
        } else if (line.startsWith('---')) {
            blocks.push({
                object: 'block',
                type: 'divider',
                divider: {}
            });
        } else {
            blocks.push({
                object: 'block',
                type: 'paragraph',
                paragraph: { rich_text: [{ type: 'text', text: { content: line } }] }
            });
        }
    }
    return blocks;
}

module.exports = { parseMarkdownToBlocks };
