/**
 * Generated Tool: commentsTool_0366
 * Domain: Comments
 * ID: 0366
 */
exports.commentsTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0366:', error);
    throw error;
  }
};
