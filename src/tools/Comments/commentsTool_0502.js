/**
 * Generated Tool: commentsTool_0502
 * Domain: Comments
 * ID: 0502
 */
exports.commentsTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0502:', error);
    throw error;
  }
};
