/**
 * Generated Tool: commentsTool_0491
 * Domain: Comments
 * ID: 0491
 */
exports.commentsTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0491:', error);
    throw error;
  }
};
