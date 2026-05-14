/**
 * Generated Tool: commentsTool_0771
 * Domain: Comments
 * ID: 0771
 */
exports.commentsTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0771:', error);
    throw error;
  }
};
