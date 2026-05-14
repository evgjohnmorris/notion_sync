/**
 * Generated Tool: blocksTool_0422
 * Domain: Blocks
 * ID: 0422
 */
exports.blocksTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0422:', error);
    throw error;
  }
};
