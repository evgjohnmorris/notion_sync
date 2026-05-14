/**
 * Generated Tool: commentsTool_0584
 * Domain: Comments
 * ID: 0584
 */
exports.commentsTool_0584 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0584:', error);
    throw error;
  }
};
