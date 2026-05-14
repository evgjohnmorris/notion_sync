/**
 * Generated Tool: commentsTool_0905
 * Domain: Comments
 * ID: 0905
 */
exports.commentsTool_0905 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0905:', error);
    throw error;
  }
};
