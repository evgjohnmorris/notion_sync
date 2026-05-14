/**
 * Generated Tool: blocksTool_0107
 * Domain: Blocks
 * ID: 0107
 */
exports.blocksTool_0107 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0107:', error);
    throw error;
  }
};
