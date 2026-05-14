/**
 * Generated Tool: commentsTool_0494
 * Domain: Comments
 * ID: 0494
 */
exports.commentsTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0494:', error);
    throw error;
  }
};
