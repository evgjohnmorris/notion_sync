/**
 * Generated Tool: commentsTool_0066
 * Domain: Comments
 * ID: 0066
 */
exports.commentsTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0066:', error);
    throw error;
  }
};
