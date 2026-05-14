/**
 * Generated Tool: commentsTool_0421
 * Domain: Comments
 * ID: 0421
 */
exports.commentsTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0421:', error);
    throw error;
  }
};
