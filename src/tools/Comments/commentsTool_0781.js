/**
 * Generated Tool: commentsTool_0781
 * Domain: Comments
 * ID: 0781
 */
exports.commentsTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0781:', error);
    throw error;
  }
};
