/**
 * Generated Tool: commentsTool_0936
 * Domain: Comments
 * ID: 0936
 */
exports.commentsTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0936:', error);
    throw error;
  }
};
