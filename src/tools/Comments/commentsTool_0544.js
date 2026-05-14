/**
 * Generated Tool: commentsTool_0544
 * Domain: Comments
 * ID: 0544
 */
exports.commentsTool_0544 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0544:', error);
    throw error;
  }
};
