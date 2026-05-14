/**
 * Generated Tool: commentsTool_0143
 * Domain: Comments
 * ID: 0143
 */
exports.commentsTool_0143 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0143:', error);
    throw error;
  }
};
