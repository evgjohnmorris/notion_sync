/**
 * Generated Tool: commentsTool_0138
 * Domain: Comments
 * ID: 0138
 */
exports.commentsTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0138:', error);
    throw error;
  }
};
