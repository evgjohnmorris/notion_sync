/**
 * Generated Tool: commentsTool_0016
 * Domain: Comments
 * ID: 0016
 */
exports.commentsTool_0016 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0016:', error);
    throw error;
  }
};
