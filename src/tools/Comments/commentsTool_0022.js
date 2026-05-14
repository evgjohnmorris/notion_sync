/**
 * Generated Tool: commentsTool_0022
 * Domain: Comments
 * ID: 0022
 */
exports.commentsTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0022:', error);
    throw error;
  }
};
