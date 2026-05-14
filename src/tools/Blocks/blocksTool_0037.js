/**
 * Generated Tool: blocksTool_0037
 * Domain: Blocks
 * ID: 0037
 */
exports.blocksTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0037:', error);
    throw error;
  }
};
