/**
 * Generated Tool: commentsTool_0718
 * Domain: Comments
 * ID: 0718
 */
exports.commentsTool_0718 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0718:', error);
    throw error;
  }
};
