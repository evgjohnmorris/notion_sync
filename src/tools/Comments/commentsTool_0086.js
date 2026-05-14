/**
 * Generated Tool: commentsTool_0086
 * Domain: Comments
 * ID: 0086
 */
exports.commentsTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0086:', error);
    throw error;
  }
};
