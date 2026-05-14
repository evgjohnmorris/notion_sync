/**
 * Generated Tool: commentsTool_0135
 * Domain: Comments
 * ID: 0135
 */
exports.commentsTool_0135 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0135:', error);
    throw error;
  }
};
