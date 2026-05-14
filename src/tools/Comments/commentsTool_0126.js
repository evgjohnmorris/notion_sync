/**
 * Generated Tool: commentsTool_0126
 * Domain: Comments
 * ID: 0126
 */
exports.commentsTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0126:', error);
    throw error;
  }
};
