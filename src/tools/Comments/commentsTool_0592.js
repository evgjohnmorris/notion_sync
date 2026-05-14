/**
 * Generated Tool: commentsTool_0592
 * Domain: Comments
 * ID: 0592
 */
exports.commentsTool_0592 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0592:', error);
    throw error;
  }
};
