/**
 * Generated Tool: commentsTool_0350
 * Domain: Comments
 * ID: 0350
 */
exports.commentsTool_0350 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0350:', error);
    throw error;
  }
};
