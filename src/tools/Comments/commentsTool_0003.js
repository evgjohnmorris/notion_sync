/**
 * Generated Tool: commentsTool_0003
 * Domain: Comments
 * ID: 0003
 */
exports.commentsTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0003:', error);
    throw error;
  }
};
