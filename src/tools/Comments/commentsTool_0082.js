/**
 * Generated Tool: commentsTool_0082
 * Domain: Comments
 * ID: 0082
 */
exports.commentsTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0082:', error);
    throw error;
  }
};
