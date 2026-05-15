/**
 * Parses a simple Markdown string into an array of Notion Block objects.
 * Supports headings, bulleted lists, paragraphs, and inline formatting (bold, italic, code).
 * 
 * @param {string} markdown - The markdown text to parse.
 * @returns {Array<Object>} An array of Notion block objects.
 */

function parseRichText(text) {
    const parts = [];
    // A simple regex to match **bold**, *italic*, and `code`
    // This is a basic implementation; a full parser would use a robust tokenizer.
    const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
    
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push({
                type: 'text',
                text: { content: text.substring(lastIndex, match.index) }
            });
        }

        const matchedString = match[0];
        const annotations = {};
        let content = matchedString;

        if (matchedString.startsWith('**') && matchedString.endsWith('**')) {
            annotations.bold = true;
            content = matchedString.slice(2, -2);
        } else if (matchedString.startsWith('*') && matchedString.endsWith('*')) {
            annotations.italic = true;
            content = matchedString.slice(1, -1);
        } else if (matchedString.startsWith('`') && matchedString.endsWith('`')) {
            annotations.code = true;
            content = matchedString.slice(1, -1);
        }

        parts.push({
            type: 'text',
            text: { content },
            annotations: Object.keys(annotations).length > 0 ? annotations : undefined
        });

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push({
            type: 'text',
            text: { content: text.substring(lastIndex) }
        });
    }

    return parts.length > 0 ? parts : [{ type: 'text', text: { content: text } }];
}

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
                heading_1: { rich_text: parseRichText(trimmed.substring(2).trim()) }
            });
        } else if (trimmed.startsWith('## ')) {
            blocks.push({
                object: 'block',
                type: 'heading_2',
                heading_2: { rich_text: parseRichText(trimmed.substring(3).trim()) }
            });
        } else if (trimmed.startsWith('### ')) {
            blocks.push({
                object: 'block',
                type: 'heading_3',
                heading_3: { rich_text: parseRichText(trimmed.substring(4).trim()) }
            });
        } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            blocks.push({
                object: 'block',
                type: 'bulleted_list_item',
                bulleted_list_item: { rich_text: parseRichText(trimmed.substring(2).trim()) }
            });
        } else {
            blocks.push({
                object: 'block',
                type: 'paragraph',
                paragraph: { rich_text: parseRichText(trimmed) }
            });
        }
    }

    return blocks;
}

module.exports = {
    markdownToNotionBlocks,
    parseRichText
};
