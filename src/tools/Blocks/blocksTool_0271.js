/**
 * Generated Tool: blocksTool_0271
 * Domain: Blocks
 * ID: 0271
 */
exports.blocksTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0271:', error);
    throw error;
  }
};
