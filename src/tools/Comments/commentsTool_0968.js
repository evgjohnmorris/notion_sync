/**
 * Generated Tool: commentsTool_0968
 * Domain: Comments
 * ID: 0968
 */
exports.commentsTool_0968 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0968:', error);
    throw error;
  }
};
