/**
 * Generated Tool: commentsTool_0851
 * Domain: Comments
 * ID: 0851
 */
exports.commentsTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0851:', error);
    throw error;
  }
};
