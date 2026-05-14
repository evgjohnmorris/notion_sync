/**
 * Generated Tool: commentsTool_0165
 * Domain: Comments
 * ID: 0165
 */
exports.commentsTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0165:', error);
    throw error;
  }
};
