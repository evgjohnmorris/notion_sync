/**
 * Generated Tool: commentsTool_0399
 * Domain: Comments
 * ID: 0399
 */
exports.commentsTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0399:', error);
    throw error;
  }
};
