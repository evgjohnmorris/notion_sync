/**
 * Generated Tool: commentsTool_0558
 * Domain: Comments
 * ID: 0558
 */
exports.commentsTool_0558 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0558:', error);
    throw error;
  }
};
