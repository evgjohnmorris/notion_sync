/**
 * Generated Tool: commentsTool_0976
 * Domain: Comments
 * ID: 0976
 */
exports.commentsTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0976:', error);
    throw error;
  }
};
