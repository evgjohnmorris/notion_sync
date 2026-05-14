/**
 * Generated Tool: commentsTool_0883
 * Domain: Comments
 * ID: 0883
 */
exports.commentsTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0883:', error);
    throw error;
  }
};
