/**
 * Generated Tool: commentsTool_0375
 * Domain: Comments
 * ID: 0375
 */
exports.commentsTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0375:', error);
    throw error;
  }
};
