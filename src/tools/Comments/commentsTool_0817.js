/**
 * Generated Tool: commentsTool_0817
 * Domain: Comments
 * ID: 0817
 */
exports.commentsTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0817:', error);
    throw error;
  }
};
