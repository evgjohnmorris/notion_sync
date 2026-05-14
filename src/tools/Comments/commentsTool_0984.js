/**
 * Generated Tool: commentsTool_0984
 * Domain: Comments
 * ID: 0984
 */
exports.commentsTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0984:', error);
    throw error;
  }
};
