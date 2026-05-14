/**
 * Generated Tool: commentsTool_0152
 * Domain: Comments
 * ID: 0152
 */
exports.commentsTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0152:', error);
    throw error;
  }
};
