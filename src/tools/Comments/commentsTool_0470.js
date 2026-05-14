/**
 * Generated Tool: commentsTool_0470
 * Domain: Comments
 * ID: 0470
 */
exports.commentsTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0470:', error);
    throw error;
  }
};
