/**
 * Generated Tool: commentsTool_0398
 * Domain: Comments
 * ID: 0398
 */
exports.commentsTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0398:', error);
    throw error;
  }
};
