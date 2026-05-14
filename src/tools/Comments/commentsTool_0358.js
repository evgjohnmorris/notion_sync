/**
 * Generated Tool: commentsTool_0358
 * Domain: Comments
 * ID: 0358
 */
exports.commentsTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0358:', error);
    throw error;
  }
};
