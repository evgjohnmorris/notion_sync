/**
 * Generated Tool: commentsTool_0598
 * Domain: Comments
 * ID: 0598
 */
exports.commentsTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0598:', error);
    throw error;
  }
};
