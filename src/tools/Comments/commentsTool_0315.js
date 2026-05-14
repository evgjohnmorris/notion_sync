/**
 * Generated Tool: commentsTool_0315
 * Domain: Comments
 * ID: 0315
 */
exports.commentsTool_0315 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0315:', error);
    throw error;
  }
};
