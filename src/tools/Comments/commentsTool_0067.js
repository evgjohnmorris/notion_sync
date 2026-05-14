/**
 * Generated Tool: commentsTool_0067
 * Domain: Comments
 * ID: 0067
 */
exports.commentsTool_0067 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0067:', error);
    throw error;
  }
};
