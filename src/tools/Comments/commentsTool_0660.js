/**
 * Generated Tool: commentsTool_0660
 * Domain: Comments
 * ID: 0660
 */
exports.commentsTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0660:', error);
    throw error;
  }
};
