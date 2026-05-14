/**
 * Generated Tool: blocksTool_0876
 * Domain: Blocks
 * ID: 0876
 */
exports.blocksTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0876:', error);
    throw error;
  }
};
