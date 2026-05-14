/**
 * Generated Tool: blocksTool_0132
 * Domain: Blocks
 * ID: 0132
 */
exports.blocksTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0132:', error);
    throw error;
  }
};
