/**
 * Generated Tool: commentsTool_0934
 * Domain: Comments
 * ID: 0934
 */
exports.commentsTool_0934 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0934:', error);
    throw error;
  }
};
