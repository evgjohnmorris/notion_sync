/**
 * Generated Tool: commentsTool_0662
 * Domain: Comments
 * ID: 0662
 */
exports.commentsTool_0662 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0662:', error);
    throw error;
  }
};
