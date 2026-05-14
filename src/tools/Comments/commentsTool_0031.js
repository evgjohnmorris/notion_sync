/**
 * Generated Tool: commentsTool_0031
 * Domain: Comments
 * ID: 0031
 */
exports.commentsTool_0031 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0031:', error);
    throw error;
  }
};
