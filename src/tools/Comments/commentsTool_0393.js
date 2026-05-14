/**
 * Generated Tool: commentsTool_0393
 * Domain: Comments
 * ID: 0393
 */
exports.commentsTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0393:', error);
    throw error;
  }
};
