/**
 * Generated Tool: commentsTool_0924
 * Domain: Comments
 * ID: 0924
 */
exports.commentsTool_0924 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0924:', error);
    throw error;
  }
};
