/**
 * Generated Tool: commentsTool_0267
 * Domain: Comments
 * ID: 0267
 */
exports.commentsTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0267:', error);
    throw error;
  }
};
