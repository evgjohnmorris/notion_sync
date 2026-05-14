/**
 * Generated Tool: commentsTool_0156
 * Domain: Comments
 * ID: 0156
 */
exports.commentsTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0156:', error);
    throw error;
  }
};
