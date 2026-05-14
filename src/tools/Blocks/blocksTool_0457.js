/**
 * Generated Tool: blocksTool_0457
 * Domain: Blocks
 * ID: 0457
 */
exports.blocksTool_0457 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0457:', error);
    throw error;
  }
};
