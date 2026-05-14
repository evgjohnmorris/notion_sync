/**
 * Generated Tool: commentsTool_0904
 * Domain: Comments
 * ID: 0904
 */
exports.commentsTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0904:', error);
    throw error;
  }
};
