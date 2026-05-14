/**
 * Generated Tool: commentsTool_0024
 * Domain: Comments
 * ID: 0024
 */
exports.commentsTool_0024 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0024:', error);
    throw error;
  }
};
