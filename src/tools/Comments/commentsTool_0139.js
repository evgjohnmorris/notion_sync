/**
 * Generated Tool: commentsTool_0139
 * Domain: Comments
 * ID: 0139
 */
exports.commentsTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0139:', error);
    throw error;
  }
};
