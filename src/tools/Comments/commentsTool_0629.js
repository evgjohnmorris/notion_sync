/**
 * Generated Tool: commentsTool_0629
 * Domain: Comments
 * ID: 0629
 */
exports.commentsTool_0629 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0629:', error);
    throw error;
  }
};
