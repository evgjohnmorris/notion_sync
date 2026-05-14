/**
 * Generated Tool: commentsTool_0841
 * Domain: Comments
 * ID: 0841
 */
exports.commentsTool_0841 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0841:', error);
    throw error;
  }
};
