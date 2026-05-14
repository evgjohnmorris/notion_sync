/**
 * Generated Tool: commentsTool_0337
 * Domain: Comments
 * ID: 0337
 */
exports.commentsTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0337:', error);
    throw error;
  }
};
