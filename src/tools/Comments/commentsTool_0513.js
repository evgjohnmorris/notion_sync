/**
 * Generated Tool: commentsTool_0513
 * Domain: Comments
 * ID: 0513
 */
exports.commentsTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0513:', error);
    throw error;
  }
};
