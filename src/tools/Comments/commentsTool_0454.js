/**
 * Generated Tool: commentsTool_0454
 * Domain: Comments
 * ID: 0454
 */
exports.commentsTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0454:', error);
    throw error;
  }
};
