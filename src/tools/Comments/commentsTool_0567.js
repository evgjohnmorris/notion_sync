/**
 * Generated Tool: commentsTool_0567
 * Domain: Comments
 * ID: 0567
 */
exports.commentsTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0567:', error);
    throw error;
  }
};
