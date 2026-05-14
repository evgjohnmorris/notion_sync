/**
 * Generated Tool: commentsTool_0774
 * Domain: Comments
 * ID: 0774
 */
exports.commentsTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0774:', error);
    throw error;
  }
};
