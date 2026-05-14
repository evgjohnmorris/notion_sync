/**
 * Generated Tool: blocksTool_0246
 * Domain: Blocks
 * ID: 0246
 */
exports.blocksTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0246:', error);
    throw error;
  }
};
