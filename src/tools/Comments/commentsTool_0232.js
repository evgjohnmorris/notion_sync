/**
 * Generated Tool: commentsTool_0232
 * Domain: Comments
 * ID: 0232
 */
exports.commentsTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0232:', error);
    throw error;
  }
};
