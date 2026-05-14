/**
 * Generated Tool: commentsTool_0722
 * Domain: Comments
 * ID: 0722
 */
exports.commentsTool_0722 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0722:', error);
    throw error;
  }
};
