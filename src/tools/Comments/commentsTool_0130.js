/**
 * Generated Tool: commentsTool_0130
 * Domain: Comments
 * ID: 0130
 */
exports.commentsTool_0130 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0130:', error);
    throw error;
  }
};
