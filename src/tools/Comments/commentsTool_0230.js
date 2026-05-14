/**
 * Generated Tool: commentsTool_0230
 * Domain: Comments
 * ID: 0230
 */
exports.commentsTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0230:', error);
    throw error;
  }
};
