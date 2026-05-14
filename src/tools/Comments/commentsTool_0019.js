/**
 * Generated Tool: commentsTool_0019
 * Domain: Comments
 * ID: 0019
 */
exports.commentsTool_0019 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0019:', error);
    throw error;
  }
};
