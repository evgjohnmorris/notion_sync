/**
 * Generated Tool: commentsTool_0383
 * Domain: Comments
 * ID: 0383
 */
exports.commentsTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0383:', error);
    throw error;
  }
};
