/**
 * Generated Tool: commentsTool_0531
 * Domain: Comments
 * ID: 0531
 */
exports.commentsTool_0531 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0531:', error);
    throw error;
  }
};
