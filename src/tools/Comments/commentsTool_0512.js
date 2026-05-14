/**
 * Generated Tool: commentsTool_0512
 * Domain: Comments
 * ID: 0512
 */
exports.commentsTool_0512 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0512:', error);
    throw error;
  }
};
