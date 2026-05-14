/**
 * Generated Tool: commentsTool_0272
 * Domain: Comments
 * ID: 0272
 */
exports.commentsTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0272:', error);
    throw error;
  }
};
