/**
 * Generated Tool: commentsTool_0171
 * Domain: Comments
 * ID: 0171
 */
exports.commentsTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0171:', error);
    throw error;
  }
};
