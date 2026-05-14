/**
 * Generated Tool: blocksTool_0243
 * Domain: Blocks
 * ID: 0243
 */
exports.blocksTool_0243 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0243:', error);
    throw error;
  }
};
