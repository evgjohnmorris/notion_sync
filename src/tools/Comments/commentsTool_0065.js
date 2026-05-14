/**
 * Generated Tool: commentsTool_0065
 * Domain: Comments
 * ID: 0065
 */
exports.commentsTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0065:', error);
    throw error;
  }
};
