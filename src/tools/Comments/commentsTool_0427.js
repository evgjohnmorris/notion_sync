/**
 * Generated Tool: commentsTool_0427
 * Domain: Comments
 * ID: 0427
 */
exports.commentsTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0427:', error);
    throw error;
  }
};
