/**
 * Generated Tool: commentsTool_0035
 * Domain: Comments
 * ID: 0035
 */
exports.commentsTool_0035 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0035:', error);
    throw error;
  }
};
