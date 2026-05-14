/**
 * Generated Tool: commentsTool_0625
 * Domain: Comments
 * ID: 0625
 */
exports.commentsTool_0625 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0625:', error);
    throw error;
  }
};
