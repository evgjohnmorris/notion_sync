/**
 * Generated Tool: commentsTool_0155
 * Domain: Comments
 * ID: 0155
 */
exports.commentsTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0155:', error);
    throw error;
  }
};
