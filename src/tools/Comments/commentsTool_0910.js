/**
 * Generated Tool: commentsTool_0910
 * Domain: Comments
 * ID: 0910
 */
exports.commentsTool_0910 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0910:', error);
    throw error;
  }
};
