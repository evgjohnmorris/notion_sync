/**
 * Generated Tool: commentsTool_0738
 * Domain: Comments
 * ID: 0738
 */
exports.commentsTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0738:', error);
    throw error;
  }
};
