/**
 * Generated Tool: commentsTool_0266
 * Domain: Comments
 * ID: 0266
 */
exports.commentsTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0266:', error);
    throw error;
  }
};
