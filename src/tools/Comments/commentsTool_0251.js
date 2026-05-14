/**
 * Generated Tool: commentsTool_0251
 * Domain: Comments
 * ID: 0251
 */
exports.commentsTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0251:', error);
    throw error;
  }
};
