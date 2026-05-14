/**
 * Generated Tool: blocksTool_0798
 * Domain: Blocks
 * ID: 0798
 */
exports.blocksTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0798:', error);
    throw error;
  }
};
