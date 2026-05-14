/**
 * Generated Tool: commentsTool_0826
 * Domain: Comments
 * ID: 0826
 */
exports.commentsTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0826:', error);
    throw error;
  }
};
