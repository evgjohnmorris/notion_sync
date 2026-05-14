/**
 * Generated Tool: commentsTool_0953
 * Domain: Comments
 * ID: 0953
 */
exports.commentsTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0953:', error);
    throw error;
  }
};
