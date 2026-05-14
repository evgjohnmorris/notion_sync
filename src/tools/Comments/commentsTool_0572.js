/**
 * Generated Tool: commentsTool_0572
 * Domain: Comments
 * ID: 0572
 */
exports.commentsTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0572:', error);
    throw error;
  }
};
