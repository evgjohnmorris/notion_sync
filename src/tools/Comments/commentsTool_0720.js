/**
 * Generated Tool: commentsTool_0720
 * Domain: Comments
 * ID: 0720
 */
exports.commentsTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0720:', error);
    throw error;
  }
};
