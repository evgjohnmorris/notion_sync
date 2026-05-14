/**
 * Generated Tool: blocksTool_0291
 * Domain: Blocks
 * ID: 0291
 */
exports.blocksTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0291:', error);
    throw error;
  }
};
