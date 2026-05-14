/**
 * Generated Tool: commentsTool_0536
 * Domain: Comments
 * ID: 0536
 */
exports.commentsTool_0536 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0536:', error);
    throw error;
  }
};
