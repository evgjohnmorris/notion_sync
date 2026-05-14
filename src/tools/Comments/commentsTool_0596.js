/**
 * Generated Tool: commentsTool_0596
 * Domain: Comments
 * ID: 0596
 */
exports.commentsTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0596:', error);
    throw error;
  }
};
