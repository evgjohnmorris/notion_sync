/**
 * Generated Tool: commentsTool_0428
 * Domain: Comments
 * ID: 0428
 */
exports.commentsTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0428:', error);
    throw error;
  }
};
