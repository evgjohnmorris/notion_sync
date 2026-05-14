/**
 * Generated Tool: commentsTool_0954
 * Domain: Comments
 * ID: 0954
 */
exports.commentsTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0954:', error);
    throw error;
  }
};
