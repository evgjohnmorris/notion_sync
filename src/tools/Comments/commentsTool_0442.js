/**
 * Generated Tool: commentsTool_0442
 * Domain: Comments
 * ID: 0442
 */
exports.commentsTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0442:', error);
    throw error;
  }
};
