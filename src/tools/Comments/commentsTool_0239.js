/**
 * Generated Tool: commentsTool_0239
 * Domain: Comments
 * ID: 0239
 */
exports.commentsTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0239:', error);
    throw error;
  }
};
