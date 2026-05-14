/**
 * Generated Tool: commentsTool_0706
 * Domain: Comments
 * ID: 0706
 */
exports.commentsTool_0706 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0706:', error);
    throw error;
  }
};
