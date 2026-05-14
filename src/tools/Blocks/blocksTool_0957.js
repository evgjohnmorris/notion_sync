/**
 * Generated Tool: blocksTool_0957
 * Domain: Blocks
 * ID: 0957
 */
exports.blocksTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0957:', error);
    throw error;
  }
};
