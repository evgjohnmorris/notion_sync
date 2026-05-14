/**
 * Generated Tool: commentsTool_0906
 * Domain: Comments
 * ID: 0906
 */
exports.commentsTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0906:', error);
    throw error;
  }
};
