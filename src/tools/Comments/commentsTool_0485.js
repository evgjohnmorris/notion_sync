/**
 * Generated Tool: commentsTool_0485
 * Domain: Comments
 * ID: 0485
 */
exports.commentsTool_0485 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0485:', error);
    throw error;
  }
};
