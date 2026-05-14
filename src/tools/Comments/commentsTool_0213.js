/**
 * Generated Tool: commentsTool_0213
 * Domain: Comments
 * ID: 0213
 */
exports.commentsTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0213:', error);
    throw error;
  }
};
