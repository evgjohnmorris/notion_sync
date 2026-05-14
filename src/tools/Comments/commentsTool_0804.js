/**
 * Generated Tool: commentsTool_0804
 * Domain: Comments
 * ID: 0804
 */
exports.commentsTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0804:', error);
    throw error;
  }
};
