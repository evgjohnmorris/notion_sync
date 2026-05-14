/**
 * Generated Tool: commentsTool_0115
 * Domain: Comments
 * ID: 0115
 */
exports.commentsTool_0115 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0115:', error);
    throw error;
  }
};
