/**
 * Generated Tool: commentsTool_0591
 * Domain: Comments
 * ID: 0591
 */
exports.commentsTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0591:', error);
    throw error;
  }
};
