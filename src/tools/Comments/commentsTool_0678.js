/**
 * Generated Tool: commentsTool_0678
 * Domain: Comments
 * ID: 0678
 */
exports.commentsTool_0678 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0678:', error);
    throw error;
  }
};
