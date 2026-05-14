/**
 * Generated Tool: commentsTool_0699
 * Domain: Comments
 * ID: 0699
 */
exports.commentsTool_0699 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0699:', error);
    throw error;
  }
};
