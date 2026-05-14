/**
 * Generated Tool: commentsTool_0995
 * Domain: Comments
 * ID: 0995
 */
exports.commentsTool_0995 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0995:', error);
    throw error;
  }
};
