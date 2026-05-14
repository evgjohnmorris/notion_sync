/**
 * Generated Tool: commentsTool_0109
 * Domain: Comments
 * ID: 0109
 */
exports.commentsTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0109:', error);
    throw error;
  }
};
