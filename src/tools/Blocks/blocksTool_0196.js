/**
 * Generated Tool: blocksTool_0196
 * Domain: Blocks
 * ID: 0196
 */
exports.blocksTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0196:', error);
    throw error;
  }
};
