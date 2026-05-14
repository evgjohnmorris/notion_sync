/**
 * Generated Tool: commentsTool_0504
 * Domain: Comments
 * ID: 0504
 */
exports.commentsTool_0504 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0504:', error);
    throw error;
  }
};
