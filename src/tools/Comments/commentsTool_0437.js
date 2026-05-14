/**
 * Generated Tool: commentsTool_0437
 * Domain: Comments
 * ID: 0437
 */
exports.commentsTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0437:', error);
    throw error;
  }
};
