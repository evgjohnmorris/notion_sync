/**
 * Generated Tool: commentsTool_0288
 * Domain: Comments
 * ID: 0288
 */
exports.commentsTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0288:', error);
    throw error;
  }
};
