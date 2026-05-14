/**
 * Generated Tool: commentsTool_0160
 * Domain: Comments
 * ID: 0160
 */
exports.commentsTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0160:', error);
    throw error;
  }
};
