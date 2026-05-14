/**
 * Generated Tool: blocksTool_0948
 * Domain: Blocks
 * ID: 0948
 */
exports.blocksTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0948:', error);
    throw error;
  }
};
