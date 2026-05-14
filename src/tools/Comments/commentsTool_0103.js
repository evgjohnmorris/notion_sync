/**
 * Generated Tool: commentsTool_0103
 * Domain: Comments
 * ID: 0103
 */
exports.commentsTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0103:', error);
    throw error;
  }
};
