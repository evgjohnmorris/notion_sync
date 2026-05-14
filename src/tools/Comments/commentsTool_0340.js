/**
 * Generated Tool: commentsTool_0340
 * Domain: Comments
 * ID: 0340
 */
exports.commentsTool_0340 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0340:', error);
    throw error;
  }
};
