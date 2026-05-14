/**
 * Generated Tool: blocksTool_0863
 * Domain: Blocks
 * ID: 0863
 */
exports.blocksTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0863:', error);
    throw error;
  }
};
