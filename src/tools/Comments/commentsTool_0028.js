/**
 * Generated Tool: commentsTool_0028
 * Domain: Comments
 * ID: 0028
 */
exports.commentsTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0028:', error);
    throw error;
  }
};
