/**
 * Generated Tool: commentsTool_0117
 * Domain: Comments
 * ID: 0117
 */
exports.commentsTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0117:', error);
    throw error;
  }
};
