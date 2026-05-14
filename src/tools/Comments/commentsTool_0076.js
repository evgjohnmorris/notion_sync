/**
 * Generated Tool: commentsTool_0076
 * Domain: Comments
 * ID: 0076
 */
exports.commentsTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0076:', error);
    throw error;
  }
};
