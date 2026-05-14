/**
 * Generated Tool: commentsTool_0186
 * Domain: Comments
 * ID: 0186
 */
exports.commentsTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0186:', error);
    throw error;
  }
};
