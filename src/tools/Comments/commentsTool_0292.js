/**
 * Generated Tool: commentsTool_0292
 * Domain: Comments
 * ID: 0292
 */
exports.commentsTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0292:', error);
    throw error;
  }
};
