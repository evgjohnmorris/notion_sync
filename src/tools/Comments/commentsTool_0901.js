/**
 * Generated Tool: commentsTool_0901
 * Domain: Comments
 * ID: 0901
 */
exports.commentsTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0901:', error);
    throw error;
  }
};
