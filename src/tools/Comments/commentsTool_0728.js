/**
 * Generated Tool: commentsTool_0728
 * Domain: Comments
 * ID: 0728
 */
exports.commentsTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0728:', error);
    throw error;
  }
};
