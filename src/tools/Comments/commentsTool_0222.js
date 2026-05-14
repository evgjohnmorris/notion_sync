/**
 * Generated Tool: commentsTool_0222
 * Domain: Comments
 * ID: 0222
 */
exports.commentsTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0222:', error);
    throw error;
  }
};
