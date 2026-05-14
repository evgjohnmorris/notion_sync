/**
 * Generated Tool: commentsTool_0942
 * Domain: Comments
 * ID: 0942
 */
exports.commentsTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0942:', error);
    throw error;
  }
};
