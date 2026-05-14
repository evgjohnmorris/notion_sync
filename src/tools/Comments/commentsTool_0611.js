/**
 * Generated Tool: commentsTool_0611
 * Domain: Comments
 * ID: 0611
 */
exports.commentsTool_0611 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0611:', error);
    throw error;
  }
};
