/**
 * Generated Tool: blocksTool_0293
 * Domain: Blocks
 * ID: 0293
 */
exports.blocksTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0293:', error);
    throw error;
  }
};
