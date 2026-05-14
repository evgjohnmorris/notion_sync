/**
 * Generated Tool: commentsTool_0277
 * Domain: Comments
 * ID: 0277
 */
exports.commentsTool_0277 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0277:', error);
    throw error;
  }
};
