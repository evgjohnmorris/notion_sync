/**
 * Generated Tool: commentsTool_0821
 * Domain: Comments
 * ID: 0821
 */
exports.commentsTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0821:', error);
    throw error;
  }
};
