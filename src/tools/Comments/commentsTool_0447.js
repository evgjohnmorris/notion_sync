/**
 * Generated Tool: commentsTool_0447
 * Domain: Comments
 * ID: 0447
 */
exports.commentsTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0447:', error);
    throw error;
  }
};
