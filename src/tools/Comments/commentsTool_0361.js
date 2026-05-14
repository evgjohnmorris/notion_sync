/**
 * Generated Tool: commentsTool_0361
 * Domain: Comments
 * ID: 0361
 */
exports.commentsTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0361:', error);
    throw error;
  }
};
