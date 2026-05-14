/**
 * Generated Tool: commentsTool_0466
 * Domain: Comments
 * ID: 0466
 */
exports.commentsTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0466:', error);
    throw error;
  }
};
