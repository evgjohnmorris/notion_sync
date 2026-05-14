/**
 * Generated Tool: commentsTool_0946
 * Domain: Comments
 * ID: 0946
 */
exports.commentsTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0946:', error);
    throw error;
  }
};
