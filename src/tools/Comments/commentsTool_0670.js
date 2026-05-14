/**
 * Generated Tool: commentsTool_0670
 * Domain: Comments
 * ID: 0670
 */
exports.commentsTool_0670 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0670:', error);
    throw error;
  }
};
