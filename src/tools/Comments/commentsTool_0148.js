/**
 * Generated Tool: commentsTool_0148
 * Domain: Comments
 * ID: 0148
 */
exports.commentsTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0148:', error);
    throw error;
  }
};
