/**
 * Generated Tool: commentsTool_0898
 * Domain: Comments
 * ID: 0898
 */
exports.commentsTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0898:', error);
    throw error;
  }
};
