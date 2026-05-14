/**
 * Generated Tool: commentsTool_0287
 * Domain: Comments
 * ID: 0287
 */
exports.commentsTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0287:', error);
    throw error;
  }
};
