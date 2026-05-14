/**
 * Generated Tool: commentsTool_0167
 * Domain: Comments
 * ID: 0167
 */
exports.commentsTool_0167 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0167:', error);
    throw error;
  }
};
