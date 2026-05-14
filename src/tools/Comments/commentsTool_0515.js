/**
 * Generated Tool: commentsTool_0515
 * Domain: Comments
 * ID: 0515
 */
exports.commentsTool_0515 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0515:', error);
    throw error;
  }
};
