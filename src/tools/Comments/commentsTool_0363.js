/**
 * Generated Tool: commentsTool_0363
 * Domain: Comments
 * ID: 0363
 */
exports.commentsTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0363:', error);
    throw error;
  }
};
