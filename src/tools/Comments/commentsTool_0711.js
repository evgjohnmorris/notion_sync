/**
 * Generated Tool: commentsTool_0711
 * Domain: Comments
 * ID: 0711
 */
exports.commentsTool_0711 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0711:', error);
    throw error;
  }
};
