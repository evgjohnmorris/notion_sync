/**
 * Generated Tool: commentsTool_0545
 * Domain: Comments
 * ID: 0545
 */
exports.commentsTool_0545 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0545:', error);
    throw error;
  }
};
