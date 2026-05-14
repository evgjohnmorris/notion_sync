/**
 * Generated Tool: commentsTool_0324
 * Domain: Comments
 * ID: 0324
 */
exports.commentsTool_0324 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0324:', error);
    throw error;
  }
};
