/**
 * Generated Tool: commentsTool_0950
 * Domain: Comments
 * ID: 0950
 */
exports.commentsTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0950:', error);
    throw error;
  }
};
