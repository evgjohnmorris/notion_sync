/**
 * Generated Tool: blocksTool_0489
 * Domain: Blocks
 * ID: 0489
 */
exports.blocksTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0489:', error);
    throw error;
  }
};
