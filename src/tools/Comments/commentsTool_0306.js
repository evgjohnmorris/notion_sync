/**
 * Generated Tool: commentsTool_0306
 * Domain: Comments
 * ID: 0306
 */
exports.commentsTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0306:', error);
    throw error;
  }
};
