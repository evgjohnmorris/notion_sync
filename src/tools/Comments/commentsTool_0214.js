/**
 * Generated Tool: commentsTool_0214
 * Domain: Comments
 * ID: 0214
 */
exports.commentsTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0214:', error);
    throw error;
  }
};
