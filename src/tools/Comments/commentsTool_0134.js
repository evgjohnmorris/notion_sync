/**
 * Generated Tool: commentsTool_0134
 * Domain: Comments
 * ID: 0134
 */
exports.commentsTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0134:', error);
    throw error;
  }
};
