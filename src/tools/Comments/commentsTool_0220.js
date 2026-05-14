/**
 * Generated Tool: commentsTool_0220
 * Domain: Comments
 * ID: 0220
 */
exports.commentsTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0220:', error);
    throw error;
  }
};
