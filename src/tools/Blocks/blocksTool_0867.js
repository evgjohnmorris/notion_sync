/**
 * Generated Tool: blocksTool_0867
 * Domain: Blocks
 * ID: 0867
 */
exports.blocksTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0867:', error);
    throw error;
  }
};
