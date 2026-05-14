/**
 * Generated Tool: commentsTool_0235
 * Domain: Comments
 * ID: 0235
 */
exports.commentsTool_0235 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0235:', error);
    throw error;
  }
};
