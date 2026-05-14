/**
 * Generated Tool: commentsTool_0964
 * Domain: Comments
 * ID: 0964
 */
exports.commentsTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0964:', error);
    throw error;
  }
};
