/**
 * Generated Tool: commentsTool_0877
 * Domain: Comments
 * ID: 0877
 */
exports.commentsTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0877:', error);
    throw error;
  }
};
