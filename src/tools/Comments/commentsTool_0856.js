/**
 * Generated Tool: commentsTool_0856
 * Domain: Comments
 * ID: 0856
 */
exports.commentsTool_0856 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0856:', error);
    throw error;
  }
};
