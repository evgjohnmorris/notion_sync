/**
 * Generated Tool: commentsTool_0715
 * Domain: Comments
 * ID: 0715
 */
exports.commentsTool_0715 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0715:', error);
    throw error;
  }
};
