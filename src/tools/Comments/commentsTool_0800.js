/**
 * Generated Tool: commentsTool_0800
 * Domain: Comments
 * ID: 0800
 */
exports.commentsTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0800:', error);
    throw error;
  }
};
