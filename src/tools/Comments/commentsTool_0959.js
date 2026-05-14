/**
 * Generated Tool: commentsTool_0959
 * Domain: Comments
 * ID: 0959
 */
exports.commentsTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0959:', error);
    throw error;
  }
};
