/**
 * Generated Tool: commentsTool_0249
 * Domain: Comments
 * ID: 0249
 */
exports.commentsTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0249:', error);
    throw error;
  }
};
