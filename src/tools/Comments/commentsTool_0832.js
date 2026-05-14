/**
 * Generated Tool: commentsTool_0832
 * Domain: Comments
 * ID: 0832
 */
exports.commentsTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0832:', error);
    throw error;
  }
};
