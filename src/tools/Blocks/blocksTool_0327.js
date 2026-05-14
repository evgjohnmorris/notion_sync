/**
 * Generated Tool: blocksTool_0327
 * Domain: Blocks
 * ID: 0327
 */
exports.blocksTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0327:', error);
    throw error;
  }
};
