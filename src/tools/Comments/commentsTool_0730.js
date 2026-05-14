/**
 * Generated Tool: commentsTool_0730
 * Domain: Comments
 * ID: 0730
 */
exports.commentsTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0730:', error);
    throw error;
  }
};
