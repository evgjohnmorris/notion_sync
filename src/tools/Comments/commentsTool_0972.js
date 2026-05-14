/**
 * Generated Tool: commentsTool_0972
 * Domain: Comments
 * ID: 0972
 */
exports.commentsTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0972:', error);
    throw error;
  }
};
