/**
 * Generated Tool: commentsTool_0921
 * Domain: Comments
 * ID: 0921
 */
exports.commentsTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0921:', error);
    throw error;
  }
};
