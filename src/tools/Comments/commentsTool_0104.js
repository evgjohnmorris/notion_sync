/**
 * Generated Tool: commentsTool_0104
 * Domain: Comments
 * ID: 0104
 */
exports.commentsTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0104:', error);
    throw error;
  }
};
