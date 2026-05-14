/**
 * Generated Tool: blocksTool_0954
 * Domain: Blocks
 * ID: 0954
 */
exports.blocksTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0954:', error);
    throw error;
  }
};
