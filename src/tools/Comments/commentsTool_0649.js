/**
 * Generated Tool: commentsTool_0649
 * Domain: Comments
 * ID: 0649
 */
exports.commentsTool_0649 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0649:', error);
    throw error;
  }
};
