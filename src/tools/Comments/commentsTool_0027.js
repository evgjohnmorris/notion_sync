/**
 * Generated Tool: commentsTool_0027
 * Domain: Comments
 * ID: 0027
 */
exports.commentsTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0027:', error);
    throw error;
  }
};
