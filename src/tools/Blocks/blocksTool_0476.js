/**
 * Generated Tool: blocksTool_0476
 * Domain: Blocks
 * ID: 0476
 */
exports.blocksTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0476:', error);
    throw error;
  }
};
