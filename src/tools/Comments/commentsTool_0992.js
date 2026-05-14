/**
 * Generated Tool: commentsTool_0992
 * Domain: Comments
 * ID: 0992
 */
exports.commentsTool_0992 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0992:', error);
    throw error;
  }
};
