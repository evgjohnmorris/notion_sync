/**
 * Generated Tool: commentsTool_0116
 * Domain: Comments
 * ID: 0116
 */
exports.commentsTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0116:', error);
    throw error;
  }
};
