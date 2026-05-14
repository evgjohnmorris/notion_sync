/**
 * Generated Tool: commentsTool_0501
 * Domain: Comments
 * ID: 0501
 */
exports.commentsTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0501:', error);
    throw error;
  }
};
