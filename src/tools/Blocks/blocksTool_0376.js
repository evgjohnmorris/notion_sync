/**
 * Generated Tool: blocksTool_0376
 * Domain: Blocks
 * ID: 0376
 */
exports.blocksTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0376:', error);
    throw error;
  }
};
