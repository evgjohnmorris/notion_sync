/**
 * Generated Tool: commentsTool_0227
 * Domain: Comments
 * ID: 0227
 */
exports.commentsTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0227:', error);
    throw error;
  }
};
