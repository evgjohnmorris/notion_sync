/**
 * Generated Tool: commentsTool_0193
 * Domain: Comments
 * ID: 0193
 */
exports.commentsTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0193:', error);
    throw error;
  }
};
