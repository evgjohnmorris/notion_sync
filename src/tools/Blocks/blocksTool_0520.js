/**
 * Generated Tool: blocksTool_0520
 * Domain: Blocks
 * ID: 0520
 */
exports.blocksTool_0520 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0520:', error);
    throw error;
  }
};
