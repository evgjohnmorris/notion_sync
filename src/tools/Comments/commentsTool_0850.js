/**
 * Generated Tool: commentsTool_0850
 * Domain: Comments
 * ID: 0850
 */
exports.commentsTool_0850 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0850:', error);
    throw error;
  }
};
