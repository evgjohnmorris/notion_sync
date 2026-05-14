/**
 * Generated Tool: commentsTool_0098
 * Domain: Comments
 * ID: 0098
 */
exports.commentsTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0098:', error);
    throw error;
  }
};
