/**
 * Generated Tool: commentsTool_0757
 * Domain: Comments
 * ID: 0757
 */
exports.commentsTool_0757 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0757:', error);
    throw error;
  }
};
