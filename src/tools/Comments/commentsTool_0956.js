/**
 * Generated Tool: commentsTool_0956
 * Domain: Comments
 * ID: 0956
 */
exports.commentsTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0956:', error);
    throw error;
  }
};
