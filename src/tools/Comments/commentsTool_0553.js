/**
 * Generated Tool: commentsTool_0553
 * Domain: Comments
 * ID: 0553
 */
exports.commentsTool_0553 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0553:', error);
    throw error;
  }
};
