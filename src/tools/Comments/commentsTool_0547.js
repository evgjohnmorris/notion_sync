/**
 * Generated Tool: commentsTool_0547
 * Domain: Comments
 * ID: 0547
 */
exports.commentsTool_0547 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0547:', error);
    throw error;
  }
};
