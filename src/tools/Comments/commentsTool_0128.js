/**
 * Generated Tool: commentsTool_0128
 * Domain: Comments
 * ID: 0128
 */
exports.commentsTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0128:', error);
    throw error;
  }
};
