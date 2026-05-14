/**
 * Generated Tool: commentsTool_0665
 * Domain: Comments
 * ID: 0665
 */
exports.commentsTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0665:', error);
    throw error;
  }
};
