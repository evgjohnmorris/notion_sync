/**
 * Generated Tool: blocksTool_0051
 * Domain: Blocks
 * ID: 0051
 */
exports.blocksTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0051:', error);
    throw error;
  }
};
