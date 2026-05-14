/**
 * Generated Tool: commentsTool_0063
 * Domain: Comments
 * ID: 0063
 */
exports.commentsTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0063:', error);
    throw error;
  }
};
