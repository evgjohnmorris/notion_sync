/**
 * Generated Tool: commentsTool_0331
 * Domain: Comments
 * ID: 0331
 */
exports.commentsTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0331:', error);
    throw error;
  }
};
