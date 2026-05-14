/**
 * Generated Tool: commentsTool_0999
 * Domain: Comments
 * ID: 0999
 */
exports.commentsTool_0999 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0999:', error);
    throw error;
  }
};
