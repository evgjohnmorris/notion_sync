/**
 * Generated Tool: commentsTool_0008
 * Domain: Comments
 * ID: 0008
 */
exports.commentsTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0008:', error);
    throw error;
  }
};
