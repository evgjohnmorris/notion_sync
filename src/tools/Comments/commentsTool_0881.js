/**
 * Generated Tool: commentsTool_0881
 * Domain: Comments
 * ID: 0881
 */
exports.commentsTool_0881 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0881:', error);
    throw error;
  }
};
