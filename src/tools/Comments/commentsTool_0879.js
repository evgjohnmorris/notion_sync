/**
 * Generated Tool: commentsTool_0879
 * Domain: Comments
 * ID: 0879
 */
exports.commentsTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0879:', error);
    throw error;
  }
};
