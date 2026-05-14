/**
 * Generated Tool: commentsTool_0487
 * Domain: Comments
 * ID: 0487
 */
exports.commentsTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0487:', error);
    throw error;
  }
};
