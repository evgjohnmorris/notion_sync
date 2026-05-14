/**
 * Generated Tool: commentsTool_0081
 * Domain: Comments
 * ID: 0081
 */
exports.commentsTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0081:', error);
    throw error;
  }
};
