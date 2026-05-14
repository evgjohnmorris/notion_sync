/**
 * Generated Tool: commentsTool_0009
 * Domain: Comments
 * ID: 0009
 */
exports.commentsTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0009:', error);
    throw error;
  }
};
