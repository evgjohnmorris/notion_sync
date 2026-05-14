/**
 * Generated Tool: commentsTool_0862
 * Domain: Comments
 * ID: 0862
 */
exports.commentsTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0862:', error);
    throw error;
  }
};
