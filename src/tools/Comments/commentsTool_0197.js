/**
 * Generated Tool: commentsTool_0197
 * Domain: Comments
 * ID: 0197
 */
exports.commentsTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0197:', error);
    throw error;
  }
};
