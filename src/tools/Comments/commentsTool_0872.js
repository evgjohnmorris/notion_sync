/**
 * Generated Tool: commentsTool_0872
 * Domain: Comments
 * ID: 0872
 */
exports.commentsTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0872:', error);
    throw error;
  }
};
