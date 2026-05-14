/**
 * Generated Tool: commentsTool_0181
 * Domain: Comments
 * ID: 0181
 */
exports.commentsTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0181:', error);
    throw error;
  }
};
