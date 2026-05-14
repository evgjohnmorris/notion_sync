/**
 * Generated Tool: commentsTool_0253
 * Domain: Comments
 * ID: 0253
 */
exports.commentsTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0253:', error);
    throw error;
  }
};
