/**
 * Generated Tool: commentsTool_0887
 * Domain: Comments
 * ID: 0887
 */
exports.commentsTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0887:', error);
    throw error;
  }
};
