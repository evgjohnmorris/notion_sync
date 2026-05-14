/**
 * Generated Tool: commentsTool_0571
 * Domain: Comments
 * ID: 0571
 */
exports.commentsTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0571:', error);
    throw error;
  }
};
