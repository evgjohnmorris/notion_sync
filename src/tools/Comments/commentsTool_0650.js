/**
 * Generated Tool: commentsTool_0650
 * Domain: Comments
 * ID: 0650
 */
exports.commentsTool_0650 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0650:', error);
    throw error;
  }
};
