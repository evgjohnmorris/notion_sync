/**
 * Generated Tool: commentsTool_0180
 * Domain: Comments
 * ID: 0180
 */
exports.commentsTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0180:', error);
    throw error;
  }
};
