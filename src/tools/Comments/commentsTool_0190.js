/**
 * Generated Tool: commentsTool_0190
 * Domain: Comments
 * ID: 0190
 */
exports.commentsTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0190:', error);
    throw error;
  }
};
