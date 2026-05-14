/**
 * Generated Tool: commentsTool_0183
 * Domain: Comments
 * ID: 0183
 */
exports.commentsTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0183:', error);
    throw error;
  }
};
