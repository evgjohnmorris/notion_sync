/**
 * Generated Tool: commentsTool_0760
 * Domain: Comments
 * ID: 0760
 */
exports.commentsTool_0760 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0760:', error);
    throw error;
  }
};
