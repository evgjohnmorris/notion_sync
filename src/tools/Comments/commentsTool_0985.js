/**
 * Generated Tool: commentsTool_0985
 * Domain: Comments
 * ID: 0985
 */
exports.commentsTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0985:', error);
    throw error;
  }
};
