/**
 * Generated Tool: commentsTool_0951
 * Domain: Comments
 * ID: 0951
 */
exports.commentsTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0951:', error);
    throw error;
  }
};
