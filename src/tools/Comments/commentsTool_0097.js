/**
 * Generated Tool: commentsTool_0097
 * Domain: Comments
 * ID: 0097
 */
exports.commentsTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0097:', error);
    throw error;
  }
};
