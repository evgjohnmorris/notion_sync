/**
 * Generated Tool: commentsTool_0118
 * Domain: Comments
 * ID: 0118
 */
exports.commentsTool_0118 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0118:', error);
    throw error;
  }
};
