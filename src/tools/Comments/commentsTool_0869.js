/**
 * Generated Tool: commentsTool_0869
 * Domain: Comments
 * ID: 0869
 */
exports.commentsTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0869:', error);
    throw error;
  }
};
