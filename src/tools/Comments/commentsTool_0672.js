/**
 * Generated Tool: commentsTool_0672
 * Domain: Comments
 * ID: 0672
 */
exports.commentsTool_0672 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0672:', error);
    throw error;
  }
};
