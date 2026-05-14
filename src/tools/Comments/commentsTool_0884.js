/**
 * Generated Tool: commentsTool_0884
 * Domain: Comments
 * ID: 0884
 */
exports.commentsTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0884:', error);
    throw error;
  }
};
