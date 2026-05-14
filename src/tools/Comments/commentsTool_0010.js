/**
 * Generated Tool: commentsTool_0010
 * Domain: Comments
 * ID: 0010
 */
exports.commentsTool_0010 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0010:', error);
    throw error;
  }
};
