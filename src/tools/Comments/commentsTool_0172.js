/**
 * Generated Tool: commentsTool_0172
 * Domain: Comments
 * ID: 0172
 */
exports.commentsTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0172:', error);
    throw error;
  }
};
