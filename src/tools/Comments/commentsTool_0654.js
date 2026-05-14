/**
 * Generated Tool: commentsTool_0654
 * Domain: Comments
 * ID: 0654
 */
exports.commentsTool_0654 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0654:', error);
    throw error;
  }
};
