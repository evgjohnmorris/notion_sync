/**
 * Generated Tool: commentsTool_0312
 * Domain: Comments
 * ID: 0312
 */
exports.commentsTool_0312 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0312:', error);
    throw error;
  }
};
