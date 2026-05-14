/**
 * Generated Tool: commentsTool_0355
 * Domain: Comments
 * ID: 0355
 */
exports.commentsTool_0355 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0355:', error);
    throw error;
  }
};
