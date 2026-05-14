/**
 * Generated Tool: blocksTool_0188
 * Domain: Blocks
 * ID: 0188
 */
exports.blocksTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0188:', error);
    throw error;
  }
};
