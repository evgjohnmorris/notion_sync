/**
 * Generated Tool: commentsTool_0802
 * Domain: Comments
 * ID: 0802
 */
exports.commentsTool_0802 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0802:', error);
    throw error;
  }
};
