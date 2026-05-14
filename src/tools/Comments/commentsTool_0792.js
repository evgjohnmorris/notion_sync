/**
 * Generated Tool: commentsTool_0792
 * Domain: Comments
 * ID: 0792
 */
exports.commentsTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0792:', error);
    throw error;
  }
};
