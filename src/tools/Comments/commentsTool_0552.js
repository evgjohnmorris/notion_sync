/**
 * Generated Tool: commentsTool_0552
 * Domain: Comments
 * ID: 0552
 */
exports.commentsTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0552:', error);
    throw error;
  }
};
