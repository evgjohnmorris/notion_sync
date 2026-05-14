/**
 * Generated Tool: commentsTool_0060
 * Domain: Comments
 * ID: 0060
 */
exports.commentsTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0060:', error);
    throw error;
  }
};
