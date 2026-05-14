/**
 * Generated Tool: commentsTool_0001
 * Domain: Comments
 * ID: 0001
 */
exports.commentsTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0001:', error);
    throw error;
  }
};
