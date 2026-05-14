/**
 * Generated Tool: commentsTool_0601
 * Domain: Comments
 * ID: 0601
 */
exports.commentsTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0601:', error);
    throw error;
  }
};
