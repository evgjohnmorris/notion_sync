/**
 * Generated Tool: commentsTool_0969
 * Domain: Comments
 * ID: 0969
 */
exports.commentsTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0969:', error);
    throw error;
  }
};
