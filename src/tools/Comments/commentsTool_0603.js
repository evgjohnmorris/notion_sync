/**
 * Generated Tool: commentsTool_0603
 * Domain: Comments
 * ID: 0603
 */
exports.commentsTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0603:', error);
    throw error;
  }
};
