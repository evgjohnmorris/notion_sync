/**
 * Generated Tool: commentsTool_0025
 * Domain: Comments
 * ID: 0025
 */
exports.commentsTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0025:', error);
    throw error;
  }
};
