/**
 * Generated Tool: blocksTool_0123
 * Domain: Blocks
 * ID: 0123
 */
exports.blocksTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0123:', error);
    throw error;
  }
};
