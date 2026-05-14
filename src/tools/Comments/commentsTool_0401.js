/**
 * Generated Tool: commentsTool_0401
 * Domain: Comments
 * ID: 0401
 */
exports.commentsTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0401:', error);
    throw error;
  }
};
