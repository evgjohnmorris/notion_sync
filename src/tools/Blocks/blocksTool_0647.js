/**
 * Generated Tool: blocksTool_0647
 * Domain: Blocks
 * ID: 0647
 */
exports.blocksTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0647:', error);
    throw error;
  }
};
