/**
 * Generated Tool: commentsTool_0912
 * Domain: Comments
 * ID: 0912
 */
exports.commentsTool_0912 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0912:', error);
    throw error;
  }
};
