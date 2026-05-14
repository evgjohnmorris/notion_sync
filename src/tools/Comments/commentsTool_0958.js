/**
 * Generated Tool: commentsTool_0958
 * Domain: Comments
 * ID: 0958
 */
exports.commentsTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0958:', error);
    throw error;
  }
};
