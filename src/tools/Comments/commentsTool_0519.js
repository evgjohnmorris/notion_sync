/**
 * Generated Tool: commentsTool_0519
 * Domain: Comments
 * ID: 0519
 */
exports.commentsTool_0519 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0519:', error);
    throw error;
  }
};
