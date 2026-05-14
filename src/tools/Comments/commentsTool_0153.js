/**
 * Generated Tool: commentsTool_0153
 * Domain: Comments
 * ID: 0153
 */
exports.commentsTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0153:', error);
    throw error;
  }
};
