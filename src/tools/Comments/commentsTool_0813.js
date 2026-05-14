/**
 * Generated Tool: commentsTool_0813
 * Domain: Comments
 * ID: 0813
 */
exports.commentsTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0813:', error);
    throw error;
  }
};
