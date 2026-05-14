/**
 * Generated Tool: commentsTool_0114
 * Domain: Comments
 * ID: 0114
 */
exports.commentsTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0114:', error);
    throw error;
  }
};
