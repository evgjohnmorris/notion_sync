/**
 * Generated Tool: commentsTool_0546
 * Domain: Comments
 * ID: 0546
 */
exports.commentsTool_0546 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0546:', error);
    throw error;
  }
};
