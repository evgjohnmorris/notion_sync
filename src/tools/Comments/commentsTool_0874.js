/**
 * Generated Tool: commentsTool_0874
 * Domain: Comments
 * ID: 0874
 */
exports.commentsTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0874:', error);
    throw error;
  }
};
