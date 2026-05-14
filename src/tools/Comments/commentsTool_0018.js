/**
 * Generated Tool: commentsTool_0018
 * Domain: Comments
 * ID: 0018
 */
exports.commentsTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0018:', error);
    throw error;
  }
};
