/**
 * Generated Tool: commentsTool_0033
 * Domain: Comments
 * ID: 0033
 */
exports.commentsTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0033:', error);
    throw error;
  }
};
