/**
 * Generated Tool: commentsTool_0632
 * Domain: Comments
 * ID: 0632
 */
exports.commentsTool_0632 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0632:', error);
    throw error;
  }
};
