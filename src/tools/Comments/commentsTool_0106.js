/**
 * Generated Tool: commentsTool_0106
 * Domain: Comments
 * ID: 0106
 */
exports.commentsTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0106:', error);
    throw error;
  }
};
