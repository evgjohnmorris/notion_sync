/**
 * Generated Tool: commentsTool_0657
 * Domain: Comments
 * ID: 0657
 */
exports.commentsTool_0657 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0657:', error);
    throw error;
  }
};
