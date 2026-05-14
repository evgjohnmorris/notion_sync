/**
 * Generated Tool: blocksTool_0779
 * Domain: Blocks
 * ID: 0779
 */
exports.blocksTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0779:', error);
    throw error;
  }
};
