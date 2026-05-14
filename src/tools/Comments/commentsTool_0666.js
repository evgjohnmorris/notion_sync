/**
 * Generated Tool: commentsTool_0666
 * Domain: Comments
 * ID: 0666
 */
exports.commentsTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0666:', error);
    throw error;
  }
};
