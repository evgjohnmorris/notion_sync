/**
 * Generated Tool: commentsTool_0782
 * Domain: Comments
 * ID: 0782
 */
exports.commentsTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0782:', error);
    throw error;
  }
};
