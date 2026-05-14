/**
 * Generated Tool: commentsTool_0164
 * Domain: Comments
 * ID: 0164
 */
exports.commentsTool_0164 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0164:', error);
    throw error;
  }
};
