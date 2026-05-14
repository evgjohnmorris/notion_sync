/**
 * Generated Tool: blocksTool_0204
 * Domain: Blocks
 * ID: 0204
 */
exports.blocksTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0204:', error);
    throw error;
  }
};
