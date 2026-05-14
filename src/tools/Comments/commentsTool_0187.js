/**
 * Generated Tool: commentsTool_0187
 * Domain: Comments
 * ID: 0187
 */
exports.commentsTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0187:', error);
    throw error;
  }
};
