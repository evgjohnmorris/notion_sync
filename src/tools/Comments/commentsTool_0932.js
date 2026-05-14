/**
 * Generated Tool: commentsTool_0932
 * Domain: Comments
 * ID: 0932
 */
exports.commentsTool_0932 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0932:', error);
    throw error;
  }
};
