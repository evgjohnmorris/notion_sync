/**
 * Generated Tool: commentsTool_0717
 * Domain: Comments
 * ID: 0717
 */
exports.commentsTool_0717 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0717:', error);
    throw error;
  }
};
