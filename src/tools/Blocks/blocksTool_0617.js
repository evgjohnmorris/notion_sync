/**
 * Generated Tool: blocksTool_0617
 * Domain: Blocks
 * ID: 0617
 */
exports.blocksTool_0617 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0617:', error);
    throw error;
  }
};
