/**
 * Generated Tool: commentsTool_0397
 * Domain: Comments
 * ID: 0397
 */
exports.commentsTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0397:', error);
    throw error;
  }
};
