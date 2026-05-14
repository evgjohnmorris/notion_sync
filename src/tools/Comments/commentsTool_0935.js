/**
 * Generated Tool: commentsTool_0935
 * Domain: Comments
 * ID: 0935
 */
exports.commentsTool_0935 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0935:', error);
    throw error;
  }
};
