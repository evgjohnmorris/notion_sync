/**
 * Generated Tool: commentsTool_0198
 * Domain: Comments
 * ID: 0198
 */
exports.commentsTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0198:', error);
    throw error;
  }
};
