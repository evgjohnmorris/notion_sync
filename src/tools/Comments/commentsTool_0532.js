/**
 * Generated Tool: commentsTool_0532
 * Domain: Comments
 * ID: 0532
 */
exports.commentsTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0532:', error);
    throw error;
  }
};
