/**
 * Generated Tool: commentsTool_0527
 * Domain: Comments
 * ID: 0527
 */
exports.commentsTool_0527 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0527:', error);
    throw error;
  }
};
