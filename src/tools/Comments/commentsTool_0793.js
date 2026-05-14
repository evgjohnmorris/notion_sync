/**
 * Generated Tool: commentsTool_0793
 * Domain: Comments
 * ID: 0793
 */
exports.commentsTool_0793 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0793:', error);
    throw error;
  }
};
