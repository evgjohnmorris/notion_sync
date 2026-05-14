/**
 * Generated Tool: commentsTool_0980
 * Domain: Comments
 * ID: 0980
 */
exports.commentsTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0980:', error);
    throw error;
  }
};
