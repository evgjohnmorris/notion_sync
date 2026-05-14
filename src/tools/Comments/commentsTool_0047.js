/**
 * Generated Tool: commentsTool_0047
 * Domain: Comments
 * ID: 0047
 */
exports.commentsTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0047:', error);
    throw error;
  }
};
