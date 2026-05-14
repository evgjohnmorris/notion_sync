/**
 * Generated Tool: commentsTool_0390
 * Domain: Comments
 * ID: 0390
 */
exports.commentsTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0390:', error);
    throw error;
  }
};
