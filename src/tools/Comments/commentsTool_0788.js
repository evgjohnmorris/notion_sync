/**
 * Generated Tool: commentsTool_0788
 * Domain: Comments
 * ID: 0788
 */
exports.commentsTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0788:', error);
    throw error;
  }
};
