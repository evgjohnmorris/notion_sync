/**
 * Generated Tool: commentsTool_0758
 * Domain: Comments
 * ID: 0758
 */
exports.commentsTool_0758 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0758:', error);
    throw error;
  }
};
