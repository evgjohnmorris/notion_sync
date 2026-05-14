/**
 * Generated Tool: commentsTool_0751
 * Domain: Comments
 * ID: 0751
 */
exports.commentsTool_0751 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0751:', error);
    throw error;
  }
};
