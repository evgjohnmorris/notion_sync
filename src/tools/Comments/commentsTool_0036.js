/**
 * Generated Tool: commentsTool_0036
 * Domain: Comments
 * ID: 0036
 */
exports.commentsTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0036:', error);
    throw error;
  }
};
