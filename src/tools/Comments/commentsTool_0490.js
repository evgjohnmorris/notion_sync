/**
 * Generated Tool: commentsTool_0490
 * Domain: Comments
 * ID: 0490
 */
exports.commentsTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0490:', error);
    throw error;
  }
};
