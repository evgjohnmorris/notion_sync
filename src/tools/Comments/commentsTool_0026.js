/**
 * Generated Tool: commentsTool_0026
 * Domain: Comments
 * ID: 0026
 */
exports.commentsTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0026:', error);
    throw error;
  }
};
