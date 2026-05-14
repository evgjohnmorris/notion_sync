/**
 * Generated Tool: commentsTool_0931
 * Domain: Comments
 * ID: 0931
 */
exports.commentsTool_0931 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0931:', error);
    throw error;
  }
};
