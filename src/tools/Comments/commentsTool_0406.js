/**
 * Generated Tool: commentsTool_0406
 * Domain: Comments
 * ID: 0406
 */
exports.commentsTool_0406 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0406:', error);
    throw error;
  }
};
