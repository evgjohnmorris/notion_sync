/**
 * Generated Tool: commentsTool_0930
 * Domain: Comments
 * ID: 0930
 */
exports.commentsTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0930:', error);
    throw error;
  }
};
