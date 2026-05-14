/**
 * Generated Tool: commentsTool_0445
 * Domain: Comments
 * ID: 0445
 */
exports.commentsTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0445:', error);
    throw error;
  }
};
