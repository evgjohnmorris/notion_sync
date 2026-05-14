/**
 * Generated Tool: commentsTool_0967
 * Domain: Comments
 * ID: 0967
 */
exports.commentsTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0967:', error);
    throw error;
  }
};
