/**
 * Generated Tool: commentsTool_0727
 * Domain: Comments
 * ID: 0727
 */
exports.commentsTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0727:', error);
    throw error;
  }
};
