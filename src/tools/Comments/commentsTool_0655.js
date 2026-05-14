/**
 * Generated Tool: commentsTool_0655
 * Domain: Comments
 * ID: 0655
 */
exports.commentsTool_0655 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0655:', error);
    throw error;
  }
};
