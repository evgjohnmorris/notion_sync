/**
 * Generated Tool: commentsTool_0656
 * Domain: Comments
 * ID: 0656
 */
exports.commentsTool_0656 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0656:', error);
    throw error;
  }
};
