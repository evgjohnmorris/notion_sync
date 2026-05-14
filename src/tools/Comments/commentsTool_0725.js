/**
 * Generated Tool: commentsTool_0725
 * Domain: Comments
 * ID: 0725
 */
exports.commentsTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0725:', error);
    throw error;
  }
};
