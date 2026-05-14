/**
 * Generated Tool: commentsTool_0433
 * Domain: Comments
 * ID: 0433
 */
exports.commentsTool_0433 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0433:', error);
    throw error;
  }
};
