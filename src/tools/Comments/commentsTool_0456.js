/**
 * Generated Tool: commentsTool_0456
 * Domain: Comments
 * ID: 0456
 */
exports.commentsTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0456:', error);
    throw error;
  }
};
