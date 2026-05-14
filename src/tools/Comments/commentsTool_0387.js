/**
 * Generated Tool: commentsTool_0387
 * Domain: Comments
 * ID: 0387
 */
exports.commentsTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0387:', error);
    throw error;
  }
};
