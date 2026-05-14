/**
 * Generated Tool: blocksTool_0963
 * Domain: Blocks
 * ID: 0963
 */
exports.blocksTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0963:', error);
    throw error;
  }
};
