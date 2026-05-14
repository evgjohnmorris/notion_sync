/**
 * Generated Tool: commentsTool_0045
 * Domain: Comments
 * ID: 0045
 */
exports.commentsTool_0045 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0045:', error);
    throw error;
  }
};
