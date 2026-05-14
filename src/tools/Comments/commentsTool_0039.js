/**
 * Generated Tool: commentsTool_0039
 * Domain: Comments
 * ID: 0039
 */
exports.commentsTool_0039 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0039:', error);
    throw error;
  }
};
