/**
 * Generated Tool: commentsTool_0078
 * Domain: Comments
 * ID: 0078
 */
exports.commentsTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0078:', error);
    throw error;
  }
};
