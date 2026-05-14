/**
 * Generated Tool: commentsTool_0499
 * Domain: Comments
 * ID: 0499
 */
exports.commentsTool_0499 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0499:', error);
    throw error;
  }
};
