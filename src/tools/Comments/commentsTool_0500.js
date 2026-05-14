/**
 * Generated Tool: commentsTool_0500
 * Domain: Comments
 * ID: 0500
 */
exports.commentsTool_0500 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0500:', error);
    throw error;
  }
};
