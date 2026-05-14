/**
 * Generated Tool: commentsTool_0775
 * Domain: Comments
 * ID: 0775
 */
exports.commentsTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0775:', error);
    throw error;
  }
};
