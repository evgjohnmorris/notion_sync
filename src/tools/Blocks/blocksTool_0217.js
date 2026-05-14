/**
 * Generated Tool: blocksTool_0217
 * Domain: Blocks
 * ID: 0217
 */
exports.blocksTool_0217 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0217:', error);
    throw error;
  }
};
