/**
 * Generated Tool: commentsTool_0823
 * Domain: Comments
 * ID: 0823
 */
exports.commentsTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0823:', error);
    throw error;
  }
};
