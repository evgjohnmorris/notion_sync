/**
 * Generated Tool: commentsTool_0597
 * Domain: Comments
 * ID: 0597
 */
exports.commentsTool_0597 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0597:', error);
    throw error;
  }
};
