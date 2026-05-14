/**
 * Generated Tool: commentsTool_0015
 * Domain: Comments
 * ID: 0015
 */
exports.commentsTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0015:', error);
    throw error;
  }
};
