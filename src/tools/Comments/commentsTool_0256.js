/**
 * Generated Tool: commentsTool_0256
 * Domain: Comments
 * ID: 0256
 */
exports.commentsTool_0256 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0256:', error);
    throw error;
  }
};
