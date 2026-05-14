/**
 * Generated Tool: blocksTool_0541
 * Domain: Blocks
 * ID: 0541
 */
exports.blocksTool_0541 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0541:', error);
    throw error;
  }
};
