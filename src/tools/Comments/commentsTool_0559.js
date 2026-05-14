/**
 * Generated Tool: commentsTool_0559
 * Domain: Comments
 * ID: 0559
 */
exports.commentsTool_0559 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0559:', error);
    throw error;
  }
};
