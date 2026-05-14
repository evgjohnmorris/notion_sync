/**
 * Generated Tool: commentsTool_0392
 * Domain: Comments
 * ID: 0392
 */
exports.commentsTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0392:', error);
    throw error;
  }
};
