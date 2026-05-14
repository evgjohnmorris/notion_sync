/**
 * Generated Tool: commentsTool_0159
 * Domain: Comments
 * ID: 0159
 */
exports.commentsTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0159:', error);
    throw error;
  }
};
