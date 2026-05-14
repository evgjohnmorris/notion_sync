/**
 * Generated Tool: commentsTool_0096
 * Domain: Comments
 * ID: 0096
 */
exports.commentsTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0096:', error);
    throw error;
  }
};
