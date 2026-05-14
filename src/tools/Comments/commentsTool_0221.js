/**
 * Generated Tool: commentsTool_0221
 * Domain: Comments
 * ID: 0221
 */
exports.commentsTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0221:', error);
    throw error;
  }
};
