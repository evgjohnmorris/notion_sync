/**
 * Generated Tool: commentsTool_0982
 * Domain: Comments
 * ID: 0982
 */
exports.commentsTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0982:', error);
    throw error;
  }
};
