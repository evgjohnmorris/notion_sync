/**
 * Generated Tool: commentsTool_0772
 * Domain: Comments
 * ID: 0772
 */
exports.commentsTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0772:', error);
    throw error;
  }
};
