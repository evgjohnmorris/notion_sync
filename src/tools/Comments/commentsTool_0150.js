/**
 * Generated Tool: commentsTool_0150
 * Domain: Comments
 * ID: 0150
 */
exports.commentsTool_0150 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0150:', error);
    throw error;
  }
};
