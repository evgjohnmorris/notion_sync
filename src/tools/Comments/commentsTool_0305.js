/**
 * Generated Tool: commentsTool_0305
 * Domain: Comments
 * ID: 0305
 */
exports.commentsTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0305:', error);
    throw error;
  }
};
