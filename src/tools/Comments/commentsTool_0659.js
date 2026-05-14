/**
 * Generated Tool: commentsTool_0659
 * Domain: Comments
 * ID: 0659
 */
exports.commentsTool_0659 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0659:', error);
    throw error;
  }
};
