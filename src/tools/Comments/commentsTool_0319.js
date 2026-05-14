/**
 * Generated Tool: commentsTool_0319
 * Domain: Comments
 * ID: 0319
 */
exports.commentsTool_0319 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0319:', error);
    throw error;
  }
};
