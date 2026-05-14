/**
 * Generated Tool: commentsTool_0462
 * Domain: Comments
 * ID: 0462
 */
exports.commentsTool_0462 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0462:', error);
    throw error;
  }
};
