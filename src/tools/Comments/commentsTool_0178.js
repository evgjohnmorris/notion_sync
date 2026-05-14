/**
 * Generated Tool: commentsTool_0178
 * Domain: Comments
 * ID: 0178
 */
exports.commentsTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0178:', error);
    throw error;
  }
};
