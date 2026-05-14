/**
 * Generated Tool: commentsTool_0092
 * Domain: Comments
 * ID: 0092
 */
exports.commentsTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0092:', error);
    throw error;
  }
};
