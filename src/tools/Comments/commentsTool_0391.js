/**
 * Generated Tool: commentsTool_0391
 * Domain: Comments
 * ID: 0391
 */
exports.commentsTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0391:', error);
    throw error;
  }
};
