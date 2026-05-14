/**
 * Generated Tool: blocksTool_0279
 * Domain: Blocks
 * ID: 0279
 */
exports.blocksTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0279:', error);
    throw error;
  }
};
