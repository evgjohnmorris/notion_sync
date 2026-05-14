/**
 * Generated Tool: commentsTool_0368
 * Domain: Comments
 * ID: 0368
 */
exports.commentsTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0368:', error);
    throw error;
  }
};
