/**
 * Generated Tool: commentsTool_0444
 * Domain: Comments
 * ID: 0444
 */
exports.commentsTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0444:', error);
    throw error;
  }
};
