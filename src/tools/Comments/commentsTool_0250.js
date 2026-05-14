/**
 * Generated Tool: commentsTool_0250
 * Domain: Comments
 * ID: 0250
 */
exports.commentsTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0250:', error);
    throw error;
  }
};
