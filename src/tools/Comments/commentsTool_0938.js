/**
 * Generated Tool: commentsTool_0938
 * Domain: Comments
 * ID: 0938
 */
exports.commentsTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0938:', error);
    throw error;
  }
};
