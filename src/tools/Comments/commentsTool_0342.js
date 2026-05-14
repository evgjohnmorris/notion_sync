/**
 * Generated Tool: commentsTool_0342
 * Domain: Comments
 * ID: 0342
 */
exports.commentsTool_0342 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0342:', error);
    throw error;
  }
};
