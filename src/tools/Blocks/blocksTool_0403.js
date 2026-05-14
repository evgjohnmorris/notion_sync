/**
 * Generated Tool: blocksTool_0403
 * Domain: Blocks
 * ID: 0403
 */
exports.blocksTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0403:', error);
    throw error;
  }
};
