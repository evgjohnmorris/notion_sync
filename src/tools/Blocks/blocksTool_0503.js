/**
 * Generated Tool: blocksTool_0503
 * Domain: Blocks
 * ID: 0503
 */
exports.blocksTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0503:', error);
    throw error;
  }
};
