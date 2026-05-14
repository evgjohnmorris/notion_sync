/**
 * Generated Tool: commentsTool_0990
 * Domain: Comments
 * ID: 0990
 */
exports.commentsTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0990:', error);
    throw error;
  }
};
