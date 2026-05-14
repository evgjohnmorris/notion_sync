/**
 * Generated Tool: commentsTool_0855
 * Domain: Comments
 * ID: 0855
 */
exports.commentsTool_0855 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0855:', error);
    throw error;
  }
};
