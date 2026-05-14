/**
 * Generated Tool: commentsTool_0328
 * Domain: Comments
 * ID: 0328
 */
exports.commentsTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0328:', error);
    throw error;
  }
};
