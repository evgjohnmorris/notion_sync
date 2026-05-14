/**
 * Generated Tool: commentsTool_0333
 * Domain: Comments
 * ID: 0333
 */
exports.commentsTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0333:', error);
    throw error;
  }
};
