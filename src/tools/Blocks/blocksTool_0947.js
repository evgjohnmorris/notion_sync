/**
 * Generated Tool: blocksTool_0947
 * Domain: Blocks
 * ID: 0947
 */
exports.blocksTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0947:', error);
    throw error;
  }
};
