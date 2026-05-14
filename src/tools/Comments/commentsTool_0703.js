/**
 * Generated Tool: commentsTool_0703
 * Domain: Comments
 * ID: 0703
 */
exports.commentsTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0703:', error);
    throw error;
  }
};
