/**
 * Generated Tool: commentsTool_0225
 * Domain: Comments
 * ID: 0225
 */
exports.commentsTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0225:', error);
    throw error;
  }
};
