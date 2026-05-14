/**
 * Generated Tool: blocksTool_0987
 * Domain: Blocks
 * ID: 0987
 */
exports.blocksTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0987:', error);
    throw error;
  }
};
