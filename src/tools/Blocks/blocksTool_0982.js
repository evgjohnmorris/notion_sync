/**
 * Generated Tool: blocksTool_0982
 * Domain: Blocks
 * ID: 0982
 */
exports.blocksTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0982:', error);
    throw error;
  }
};
