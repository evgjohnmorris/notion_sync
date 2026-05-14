/**
 * Generated Tool: commentsTool_0482
 * Domain: Comments
 * ID: 0482
 */
exports.commentsTool_0482 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0482:', error);
    throw error;
  }
};
