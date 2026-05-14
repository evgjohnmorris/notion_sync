/**
 * Generated Tool: blocksTool_0481
 * Domain: Blocks
 * ID: 0481
 */
exports.blocksTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0481:', error);
    throw error;
  }
};
