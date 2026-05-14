/**
 * Generated Tool: commentsTool_0218
 * Domain: Comments
 * ID: 0218
 */
exports.commentsTool_0218 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0218:', error);
    throw error;
  }
};
