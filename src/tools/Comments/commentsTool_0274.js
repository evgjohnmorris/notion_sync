/**
 * Generated Tool: commentsTool_0274
 * Domain: Comments
 * ID: 0274
 */
exports.commentsTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0274:', error);
    throw error;
  }
};
