/**
 * Generated Tool: commentsTool_0142
 * Domain: Comments
 * ID: 0142
 */
exports.commentsTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0142:', error);
    throw error;
  }
};
