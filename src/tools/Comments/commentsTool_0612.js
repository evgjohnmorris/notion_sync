/**
 * Generated Tool: commentsTool_0612
 * Domain: Comments
 * ID: 0612
 */
exports.commentsTool_0612 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0612:', error);
    throw error;
  }
};
