/**
 * Generated Tool: commentsTool_0265
 * Domain: Comments
 * ID: 0265
 */
exports.commentsTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0265:', error);
    throw error;
  }
};
