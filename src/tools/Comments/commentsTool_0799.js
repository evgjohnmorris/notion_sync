/**
 * Generated Tool: commentsTool_0799
 * Domain: Comments
 * ID: 0799
 */
exports.commentsTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0799:', error);
    throw error;
  }
};
