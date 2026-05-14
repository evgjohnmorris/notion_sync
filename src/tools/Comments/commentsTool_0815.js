/**
 * Generated Tool: commentsTool_0815
 * Domain: Comments
 * ID: 0815
 */
exports.commentsTool_0815 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0815:', error);
    throw error;
  }
};
