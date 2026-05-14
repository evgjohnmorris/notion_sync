/**
 * Generated Tool: commentsTool_0339
 * Domain: Comments
 * ID: 0339
 */
exports.commentsTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0339:', error);
    throw error;
  }
};
