/**
 * Generated Tool: commentsTool_0563
 * Domain: Comments
 * ID: 0563
 */
exports.commentsTool_0563 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0563:', error);
    throw error;
  }
};
