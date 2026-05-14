/**
 * Generated Tool: commentsTool_0378
 * Domain: Comments
 * ID: 0378
 */
exports.commentsTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0378:', error);
    throw error;
  }
};
