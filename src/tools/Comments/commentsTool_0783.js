/**
 * Generated Tool: commentsTool_0783
 * Domain: Comments
 * ID: 0783
 */
exports.commentsTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0783:', error);
    throw error;
  }
};
