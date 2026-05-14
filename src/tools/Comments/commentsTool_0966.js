/**
 * Generated Tool: commentsTool_0966
 * Domain: Comments
 * ID: 0966
 */
exports.commentsTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0966:', error);
    throw error;
  }
};
