/**
 * Generated Tool: commentsTool_0122
 * Domain: Comments
 * ID: 0122
 */
exports.commentsTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0122:', error);
    throw error;
  }
};
