/**
 * Generated Tool: commentsTool_0373
 * Domain: Comments
 * ID: 0373
 */
exports.commentsTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0373:', error);
    throw error;
  }
};
