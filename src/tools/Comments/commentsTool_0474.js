/**
 * Generated Tool: commentsTool_0474
 * Domain: Comments
 * ID: 0474
 */
exports.commentsTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0474:', error);
    throw error;
  }
};
