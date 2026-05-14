/**
 * Generated Tool: commentsTool_0144
 * Domain: Comments
 * ID: 0144
 */
exports.commentsTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0144:', error);
    throw error;
  }
};
