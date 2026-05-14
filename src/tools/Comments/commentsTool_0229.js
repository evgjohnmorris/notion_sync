/**
 * Generated Tool: commentsTool_0229
 * Domain: Comments
 * ID: 0229
 */
exports.commentsTool_0229 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0229:', error);
    throw error;
  }
};
