/**
 * Generated Tool: commentsTool_0247
 * Domain: Comments
 * ID: 0247
 */
exports.commentsTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0247:', error);
    throw error;
  }
};
