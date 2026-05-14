/**
 * Generated Tool: blocksTool_0902
 * Domain: Blocks
 * ID: 0902
 */
exports.blocksTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0902:', error);
    throw error;
  }
};
