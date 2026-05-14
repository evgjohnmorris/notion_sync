/**
 * Generated Tool: commentsTool_0044
 * Domain: Comments
 * ID: 0044
 */
exports.commentsTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0044:', error);
    throw error;
  }
};
