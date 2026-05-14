/**
 * Generated Tool: commentsTool_0870
 * Domain: Comments
 * ID: 0870
 */
exports.commentsTool_0870 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0870:', error);
    throw error;
  }
};
