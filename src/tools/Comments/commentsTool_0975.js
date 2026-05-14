/**
 * Generated Tool: commentsTool_0975
 * Domain: Comments
 * ID: 0975
 */
exports.commentsTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0975:', error);
    throw error;
  }
};
