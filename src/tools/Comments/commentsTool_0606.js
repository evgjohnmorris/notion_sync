/**
 * Generated Tool: commentsTool_0606
 * Domain: Comments
 * ID: 0606
 */
exports.commentsTool_0606 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0606:', error);
    throw error;
  }
};
