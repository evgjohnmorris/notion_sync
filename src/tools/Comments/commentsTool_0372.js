/**
 * Generated Tool: commentsTool_0372
 * Domain: Comments
 * ID: 0372
 */
exports.commentsTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0372:', error);
    throw error;
  }
};
