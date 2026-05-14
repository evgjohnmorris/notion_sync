/**
 * Generated Tool: commentsTool_0057
 * Domain: Comments
 * ID: 0057
 */
exports.commentsTool_0057 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0057:', error);
    throw error;
  }
};
