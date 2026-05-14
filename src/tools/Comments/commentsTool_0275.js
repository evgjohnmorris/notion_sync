/**
 * Generated Tool: commentsTool_0275
 * Domain: Comments
 * ID: 0275
 */
exports.commentsTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0275:', error);
    throw error;
  }
};
