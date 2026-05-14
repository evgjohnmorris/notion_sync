/**
 * Generated Tool: commentsTool_0184
 * Domain: Comments
 * ID: 0184
 */
exports.commentsTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0184:', error);
    throw error;
  }
};
