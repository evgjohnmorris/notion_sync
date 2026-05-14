/**
 * Generated Tool: commentsTool_0622
 * Domain: Comments
 * ID: 0622
 */
exports.commentsTool_0622 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0622:', error);
    throw error;
  }
};
