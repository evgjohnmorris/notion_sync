/**
 * Generated Tool: commentsTool_0191
 * Domain: Comments
 * ID: 0191
 */
exports.commentsTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0191:', error);
    throw error;
  }
};
