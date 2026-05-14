/**
 * Generated Tool: commentsTool_0698
 * Domain: Comments
 * ID: 0698
 */
exports.commentsTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0698:', error);
    throw error;
  }
};
