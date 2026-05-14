/**
 * Generated Tool: blocksTool_0286
 * Domain: Blocks
 * ID: 0286
 */
exports.blocksTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0286:', error);
    throw error;
  }
};
