/**
 * Generated Tool: commentsTool_0053
 * Domain: Comments
 * ID: 0053
 */
exports.commentsTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0053:', error);
    throw error;
  }
};
