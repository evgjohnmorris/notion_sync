/**
 * Generated Tool: blocksTool_0523
 * Domain: Blocks
 * ID: 0523
 */
exports.blocksTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0523:', error);
    throw error;
  }
};
