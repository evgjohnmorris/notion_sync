/**
 * Generated Tool: commentsTool_0196
 * Domain: Comments
 * ID: 0196
 */
exports.commentsTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0196:', error);
    throw error;
  }
};
