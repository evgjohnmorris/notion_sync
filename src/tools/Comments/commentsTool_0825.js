/**
 * Generated Tool: commentsTool_0825
 * Domain: Comments
 * ID: 0825
 */
exports.commentsTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0825:', error);
    throw error;
  }
};
