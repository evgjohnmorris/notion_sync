/**
 * Generated Tool: commentsTool_0900
 * Domain: Comments
 * ID: 0900
 */
exports.commentsTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0900:', error);
    throw error;
  }
};
