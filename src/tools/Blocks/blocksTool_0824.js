/**
 * Generated Tool: blocksTool_0824
 * Domain: Blocks
 * ID: 0824
 */
exports.blocksTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0824:', error);
    throw error;
  }
};
