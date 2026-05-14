/**
 * Generated Tool: commentsTool_0644
 * Domain: Comments
 * ID: 0644
 */
exports.commentsTool_0644 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0644:', error);
    throw error;
  }
};
