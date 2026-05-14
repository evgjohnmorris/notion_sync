/**
 * Generated Tool: commentsTool_0049
 * Domain: Comments
 * ID: 0049
 */
exports.commentsTool_0049 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0049:', error);
    throw error;
  }
};
