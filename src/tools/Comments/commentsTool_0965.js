/**
 * Generated Tool: commentsTool_0965
 * Domain: Comments
 * ID: 0965
 */
exports.commentsTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0965:', error);
    throw error;
  }
};
