/**
 * Generated Tool: blocksTool_0977
 * Domain: Blocks
 * ID: 0977
 */
exports.blocksTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0977:', error);
    throw error;
  }
};
