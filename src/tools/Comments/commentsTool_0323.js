/**
 * Generated Tool: commentsTool_0323
 * Domain: Comments
 * ID: 0323
 */
exports.commentsTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0323:', error);
    throw error;
  }
};
