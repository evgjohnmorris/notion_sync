/**
 * Generated Tool: commentsTool_0362
 * Domain: Comments
 * ID: 0362
 */
exports.commentsTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0362:', error);
    throw error;
  }
};
