/**
 * Generated Tool: commentsTool_0257
 * Domain: Comments
 * ID: 0257
 */
exports.commentsTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0257:', error);
    throw error;
  }
};
