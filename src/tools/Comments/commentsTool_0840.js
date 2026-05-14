/**
 * Generated Tool: commentsTool_0840
 * Domain: Comments
 * ID: 0840
 */
exports.commentsTool_0840 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0840:', error);
    throw error;
  }
};
