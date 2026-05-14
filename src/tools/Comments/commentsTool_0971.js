/**
 * Generated Tool: commentsTool_0971
 * Domain: Comments
 * ID: 0971
 */
exports.commentsTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0971:', error);
    throw error;
  }
};
