/**
 * Generated Tool: commentsTool_0909
 * Domain: Comments
 * ID: 0909
 */
exports.commentsTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0909:', error);
    throw error;
  }
};
