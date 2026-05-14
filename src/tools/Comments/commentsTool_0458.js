/**
 * Generated Tool: commentsTool_0458
 * Domain: Comments
 * ID: 0458
 */
exports.commentsTool_0458 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0458:', error);
    throw error;
  }
};
