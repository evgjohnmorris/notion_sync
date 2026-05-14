/**
 * Generated Tool: commentsTool_0724
 * Domain: Comments
 * ID: 0724
 */
exports.commentsTool_0724 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0724:', error);
    throw error;
  }
};
