/**
 * Generated Tool: blocksTool_0677
 * Domain: Blocks
 * ID: 0677
 */
exports.blocksTool_0677 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0677:', error);
    throw error;
  }
};
