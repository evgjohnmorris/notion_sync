/**
 * Generated Tool: blocksTool_0321
 * Domain: Blocks
 * ID: 0321
 */
exports.blocksTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0321:', error);
    throw error;
  }
};
