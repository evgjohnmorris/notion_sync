/**
 * Generated Tool: commentsTool_0805
 * Domain: Comments
 * ID: 0805
 */
exports.commentsTool_0805 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0805:', error);
    throw error;
  }
};
