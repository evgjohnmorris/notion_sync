/**
 * Generated Tool: commentsTool_0441
 * Domain: Comments
 * ID: 0441
 */
exports.commentsTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0441:', error);
    throw error;
  }
};
