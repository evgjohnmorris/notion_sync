/**
 * Generated Tool: commentsTool_0731
 * Domain: Comments
 * ID: 0731
 */
exports.commentsTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0731:', error);
    throw error;
  }
};
