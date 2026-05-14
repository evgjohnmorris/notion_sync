/**
 * Generated Tool: commentsTool_0077
 * Domain: Comments
 * ID: 0077
 */
exports.commentsTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0077:', error);
    throw error;
  }
};
