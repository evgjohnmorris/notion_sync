/**
 * Generated Tool: commentsTool_0163
 * Domain: Comments
 * ID: 0163
 */
exports.commentsTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0163:', error);
    throw error;
  }
};
