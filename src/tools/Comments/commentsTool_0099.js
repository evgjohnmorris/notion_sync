/**
 * Generated Tool: commentsTool_0099
 * Domain: Comments
 * ID: 0099
 */
exports.commentsTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0099:', error);
    throw error;
  }
};
