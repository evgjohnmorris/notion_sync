/**
 * Generated Tool: blocksTool_0106
 * Domain: Blocks
 * ID: 0106
 */
exports.blocksTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0106:', error);
    throw error;
  }
};
