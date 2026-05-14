/**
 * Generated Tool: commentsTool_0080
 * Domain: Comments
 * ID: 0080
 */
exports.commentsTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0080:', error);
    throw error;
  }
};
