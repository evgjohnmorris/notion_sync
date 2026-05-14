/**
 * Generated Tool: commentsTool_0998
 * Domain: Comments
 * ID: 0998
 */
exports.commentsTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0998:', error);
    throw error;
  }
};
