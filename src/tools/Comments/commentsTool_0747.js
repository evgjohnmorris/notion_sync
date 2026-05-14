/**
 * Generated Tool: commentsTool_0747
 * Domain: Comments
 * ID: 0747
 */
exports.commentsTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0747:', error);
    throw error;
  }
};
