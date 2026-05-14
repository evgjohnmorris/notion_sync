/**
 * Generated Tool: commentsTool_0093
 * Domain: Comments
 * ID: 0093
 */
exports.commentsTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0093:', error);
    throw error;
  }
};
