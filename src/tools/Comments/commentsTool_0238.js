/**
 * Generated Tool: commentsTool_0238
 * Domain: Comments
 * ID: 0238
 */
exports.commentsTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0238:', error);
    throw error;
  }
};
