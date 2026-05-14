/**
 * Generated Tool: commentsTool_0795
 * Domain: Comments
 * ID: 0795
 */
exports.commentsTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0795:', error);
    throw error;
  }
};
