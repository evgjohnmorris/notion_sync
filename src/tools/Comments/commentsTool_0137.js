/**
 * Generated Tool: commentsTool_0137
 * Domain: Comments
 * ID: 0137
 */
exports.commentsTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0137:', error);
    throw error;
  }
};
