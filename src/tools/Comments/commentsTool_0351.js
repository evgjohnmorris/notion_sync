/**
 * Generated Tool: commentsTool_0351
 * Domain: Comments
 * ID: 0351
 */
exports.commentsTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0351:', error);
    throw error;
  }
};
