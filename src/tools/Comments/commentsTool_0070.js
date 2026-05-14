/**
 * Generated Tool: commentsTool_0070
 * Domain: Comments
 * ID: 0070
 */
exports.commentsTool_0070 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0070:', error);
    throw error;
  }
};
