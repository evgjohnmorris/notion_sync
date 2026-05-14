/**
 * Generated Tool: commentsTool_0085
 * Domain: Comments
 * ID: 0085
 */
exports.commentsTool_0085 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0085:', error);
    throw error;
  }
};
