/**
 * Generated Tool: commentsTool_0925
 * Domain: Comments
 * ID: 0925
 */
exports.commentsTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0925:', error);
    throw error;
  }
};
