/**
 * Generated Tool: commentsTool_0195
 * Domain: Comments
 * ID: 0195
 */
exports.commentsTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0195:', error);
    throw error;
  }
};
