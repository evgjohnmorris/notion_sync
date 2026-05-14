/**
 * Generated Tool: blocksTool_0354
 * Domain: Blocks
 * ID: 0354
 */
exports.blocksTool_0354 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0354:', error);
    throw error;
  }
};
