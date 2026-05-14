/**
 * Generated Tool: commentsTool_0211
 * Domain: Comments
 * ID: 0211
 */
exports.commentsTool_0211 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0211:', error);
    throw error;
  }
};
