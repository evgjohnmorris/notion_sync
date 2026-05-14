/**
 * Generated Tool: commentsTool_0646
 * Domain: Comments
 * ID: 0646
 */
exports.commentsTool_0646 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0646:', error);
    throw error;
  }
};
