/**
 * Generated Tool: commentsTool_0307
 * Domain: Comments
 * ID: 0307
 */
exports.commentsTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0307:', error);
    throw error;
  }
};
