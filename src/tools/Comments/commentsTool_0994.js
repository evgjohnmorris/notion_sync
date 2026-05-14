/**
 * Generated Tool: commentsTool_0994
 * Domain: Comments
 * ID: 0994
 */
exports.commentsTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0994:', error);
    throw error;
  }
};
