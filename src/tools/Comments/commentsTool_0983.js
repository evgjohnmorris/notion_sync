/**
 * Generated Tool: commentsTool_0983
 * Domain: Comments
 * ID: 0983
 */
exports.commentsTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0983:', error);
    throw error;
  }
};
