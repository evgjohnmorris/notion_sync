/**
 * Generated Tool: commentsTool_0205
 * Domain: Comments
 * ID: 0205
 */
exports.commentsTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0205:', error);
    throw error;
  }
};
