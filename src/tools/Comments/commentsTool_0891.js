/**
 * Generated Tool: commentsTool_0891
 * Domain: Comments
 * ID: 0891
 */
exports.commentsTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0891:', error);
    throw error;
  }
};
