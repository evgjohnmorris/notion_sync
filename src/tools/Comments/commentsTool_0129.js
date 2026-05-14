/**
 * Generated Tool: commentsTool_0129
 * Domain: Comments
 * ID: 0129
 */
exports.commentsTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0129:', error);
    throw error;
  }
};
