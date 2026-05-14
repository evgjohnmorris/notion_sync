/**
 * Generated Tool: commentsTool_0125
 * Domain: Comments
 * ID: 0125
 */
exports.commentsTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0125:', error);
    throw error;
  }
};
