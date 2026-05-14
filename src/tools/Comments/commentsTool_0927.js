/**
 * Generated Tool: commentsTool_0927
 * Domain: Comments
 * ID: 0927
 */
exports.commentsTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0927:', error);
    throw error;
  }
};
