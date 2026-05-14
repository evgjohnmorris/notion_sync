/**
 * Generated Tool: commentsTool_0011
 * Domain: Comments
 * ID: 0011
 */
exports.commentsTool_0011 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0011:', error);
    throw error;
  }
};
