/**
 * Generated Tool: commentsTool_0439
 * Domain: Comments
 * ID: 0439
 */
exports.commentsTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0439:', error);
    throw error;
  }
};
