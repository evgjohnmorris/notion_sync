/**
 * Generated Tool: commentsTool_0310
 * Domain: Comments
 * ID: 0310
 */
exports.commentsTool_0310 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0310:', error);
    throw error;
  }
};
