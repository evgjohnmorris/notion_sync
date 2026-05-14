/**
 * Generated Tool: commentsTool_0586
 * Domain: Comments
 * ID: 0586
 */
exports.commentsTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0586:', error);
    throw error;
  }
};
