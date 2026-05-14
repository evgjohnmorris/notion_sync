/**
 * Generated Tool: commentsTool_0569
 * Domain: Comments
 * ID: 0569
 */
exports.commentsTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0569:', error);
    throw error;
  }
};
