/**
 * Generated Tool: commentsTool_0212
 * Domain: Comments
 * ID: 0212
 */
exports.commentsTool_0212 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0212:', error);
    throw error;
  }
};
