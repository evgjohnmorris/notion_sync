/**
 * Generated Tool: commentsTool_0365
 * Domain: Comments
 * ID: 0365
 */
exports.commentsTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0365:', error);
    throw error;
  }
};
