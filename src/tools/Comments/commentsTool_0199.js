/**
 * Generated Tool: commentsTool_0199
 * Domain: Comments
 * ID: 0199
 */
exports.commentsTool_0199 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0199:', error);
    throw error;
  }
};
