/**
 * Generated Tool: commentsTool_0353
 * Domain: Comments
 * ID: 0353
 */
exports.commentsTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0353:', error);
    throw error;
  }
};
