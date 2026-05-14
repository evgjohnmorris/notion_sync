/**
 * Generated Tool: commentsTool_0806
 * Domain: Comments
 * ID: 0806
 */
exports.commentsTool_0806 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0806:', error);
    throw error;
  }
};
