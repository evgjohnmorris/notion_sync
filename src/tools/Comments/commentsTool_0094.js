/**
 * Generated Tool: commentsTool_0094
 * Domain: Comments
 * ID: 0094
 */
exports.commentsTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0094:', error);
    throw error;
  }
};
