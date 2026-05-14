/**
 * Generated Tool: blocksTool_0157
 * Domain: Blocks
 * ID: 0157
 */
exports.blocksTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0157:', error);
    throw error;
  }
};
