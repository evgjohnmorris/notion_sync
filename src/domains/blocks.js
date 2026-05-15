const { markdownToNotionBlocks } = require('../ai-enhancements/markdown-parser');

async function appendMarkdown(notionClient, blockId, markdownString) {
    const children = markdownToNotionBlocks(markdownString);
    if (children.length === 0) {
        return { object: 'list', results: [], type: 'block', block: {} };
    }
    
    return notionClient.blocks.children.append({
        block_id: blockId,
        children: children
    });
}

async function retrieve(notionClient, blockId) {
    return notionClient.blocks.retrieve({ block_id: blockId });
}

async function update(notionClient, blockId, payload) {
    return notionClient.blocks.update({
        block_id: blockId,
        ...payload
    });
}

async function deleteBlock(notionClient, blockId) {
    return notionClient.blocks.delete({ block_id: blockId });
}

module.exports = {
    appendMarkdown,
    retrieve,
    update,
    delete: deleteBlock
};
