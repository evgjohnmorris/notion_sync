/**
 * Generated Tool: commentsTool_0885
 * Domain: Comments
 * ID: 0885
 */
exports.commentsTool_0885 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0885:', error);
    throw error;
  }
};
