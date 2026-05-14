/**
 * Generated Tool: commentsTool_0380
 * Domain: Comments
 * ID: 0380
 */
exports.commentsTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0380:', error);
    throw error;
  }
};
