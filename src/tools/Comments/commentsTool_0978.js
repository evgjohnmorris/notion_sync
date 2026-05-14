/**
 * Generated Tool: commentsTool_0978
 * Domain: Comments
 * ID: 0978
 */
exports.commentsTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0978:', error);
    throw error;
  }
};
