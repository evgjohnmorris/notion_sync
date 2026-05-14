/**
 * Generated Tool: commentsTool_0957
 * Domain: Comments
 * ID: 0957
 */
exports.commentsTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0957:', error);
    throw error;
  }
};
