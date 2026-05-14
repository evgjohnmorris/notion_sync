/**
 * Generated Tool: commentsTool_0014
 * Domain: Comments
 * ID: 0014
 */
exports.commentsTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0014:', error);
    throw error;
  }
};
