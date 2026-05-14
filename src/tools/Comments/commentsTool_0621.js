/**
 * Generated Tool: commentsTool_0621
 * Domain: Comments
 * ID: 0621
 */
exports.commentsTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0621:', error);
    throw error;
  }
};
