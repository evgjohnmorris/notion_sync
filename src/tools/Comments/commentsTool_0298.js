/**
 * Generated Tool: commentsTool_0298
 * Domain: Comments
 * ID: 0298
 */
exports.commentsTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0298:', error);
    throw error;
  }
};
