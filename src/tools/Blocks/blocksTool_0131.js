/**
 * Generated Tool: blocksTool_0131
 * Domain: Blocks
 * ID: 0131
 */
exports.blocksTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0131:', error);
    throw error;
  }
};
