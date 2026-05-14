/**
 * Generated Tool: commentsTool_0300
 * Domain: Comments
 * ID: 0300
 */
exports.commentsTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0300:', error);
    throw error;
  }
};
