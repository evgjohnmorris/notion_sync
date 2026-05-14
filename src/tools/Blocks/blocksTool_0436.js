/**
 * Generated Tool: blocksTool_0436
 * Domain: Blocks
 * ID: 0436
 */
exports.blocksTool_0436 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0436:', error);
    throw error;
  }
};
