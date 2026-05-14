/**
 * Generated Tool: commentsTool_0533
 * Domain: Comments
 * ID: 0533
 */
exports.commentsTool_0533 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0533:', error);
    throw error;
  }
};
