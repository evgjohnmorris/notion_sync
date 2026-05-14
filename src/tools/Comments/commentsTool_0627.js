/**
 * Generated Tool: commentsTool_0627
 * Domain: Comments
 * ID: 0627
 */
exports.commentsTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0627:', error);
    throw error;
  }
};
