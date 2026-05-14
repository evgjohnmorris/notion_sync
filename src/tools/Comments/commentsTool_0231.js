/**
 * Generated Tool: commentsTool_0231
 * Domain: Comments
 * ID: 0231
 */
exports.commentsTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0231:', error);
    throw error;
  }
};
