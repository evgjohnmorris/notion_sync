/**
 * Generated Tool: commentsTool_0497
 * Domain: Comments
 * ID: 0497
 */
exports.commentsTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0497:', error);
    throw error;
  }
};
