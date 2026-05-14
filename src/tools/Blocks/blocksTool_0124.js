/**
 * Generated Tool: blocksTool_0124
 * Domain: Blocks
 * ID: 0124
 */
exports.blocksTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0124:', error);
    throw error;
  }
};
