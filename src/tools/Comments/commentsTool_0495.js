/**
 * Generated Tool: commentsTool_0495
 * Domain: Comments
 * ID: 0495
 */
exports.commentsTool_0495 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0495:', error);
    throw error;
  }
};
