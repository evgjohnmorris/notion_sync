/**
 * Generated Tool: commentsTool_0602
 * Domain: Comments
 * ID: 0602
 */
exports.commentsTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0602:', error);
    throw error;
  }
};
