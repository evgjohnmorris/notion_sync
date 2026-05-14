/**
 * Generated Tool: commentsTool_0050
 * Domain: Comments
 * ID: 0050
 */
exports.commentsTool_0050 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0050:', error);
    throw error;
  }
};
