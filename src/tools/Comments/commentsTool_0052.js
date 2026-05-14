/**
 * Generated Tool: commentsTool_0052
 * Domain: Comments
 * ID: 0052
 */
exports.commentsTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0052:', error);
    throw error;
  }
};
