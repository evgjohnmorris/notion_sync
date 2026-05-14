/**
 * Generated Tool: commentsTool_0939
 * Domain: Comments
 * ID: 0939
 */
exports.commentsTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0939:', error);
    throw error;
  }
};
