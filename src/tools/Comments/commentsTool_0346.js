/**
 * Generated Tool: commentsTool_0346
 * Domain: Comments
 * ID: 0346
 */
exports.commentsTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0346:', error);
    throw error;
  }
};
