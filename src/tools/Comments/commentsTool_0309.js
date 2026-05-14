/**
 * Generated Tool: commentsTool_0309
 * Domain: Comments
 * ID: 0309
 */
exports.commentsTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0309:', error);
    throw error;
  }
};
