/**
 * Generated Tool: commentsTool_0464
 * Domain: Comments
 * ID: 0464
 */
exports.commentsTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0464:', error);
    throw error;
  }
};
