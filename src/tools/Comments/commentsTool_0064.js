/**
 * Generated Tool: commentsTool_0064
 * Domain: Comments
 * ID: 0064
 */
exports.commentsTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0064:', error);
    throw error;
  }
};
