/**
 * Generated Tool: commentsTool_0084
 * Domain: Comments
 * ID: 0084
 */
exports.commentsTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0084:', error);
    throw error;
  }
};
