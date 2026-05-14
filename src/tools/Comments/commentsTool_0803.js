/**
 * Generated Tool: commentsTool_0803
 * Domain: Comments
 * ID: 0803
 */
exports.commentsTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0803:', error);
    throw error;
  }
};
