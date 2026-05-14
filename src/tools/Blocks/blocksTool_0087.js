/**
 * Generated Tool: blocksTool_0087
 * Domain: Blocks
 * ID: 0087
 */
exports.blocksTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0087:', error);
    throw error;
  }
};
