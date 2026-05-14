/**
 * Generated Tool: commentsTool_0812
 * Domain: Comments
 * ID: 0812
 */
exports.commentsTool_0812 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0812:', error);
    throw error;
  }
};
