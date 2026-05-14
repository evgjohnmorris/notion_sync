/**
 * Generated Tool: blocksTool_0472
 * Domain: Blocks
 * ID: 0472
 */
exports.blocksTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0472:', error);
    throw error;
  }
};
