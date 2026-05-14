/**
 * Generated Tool: commentsTool_0245
 * Domain: Comments
 * ID: 0245
 */
exports.commentsTool_0245 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0245:', error);
    throw error;
  }
};
