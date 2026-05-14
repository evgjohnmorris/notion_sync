/**
 * Generated Tool: commentsTool_0908
 * Domain: Comments
 * ID: 0908
 */
exports.commentsTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0908:', error);
    throw error;
  }
};
