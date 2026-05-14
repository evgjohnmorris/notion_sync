/**
 * Generated Tool: commentsTool_0521
 * Domain: Comments
 * ID: 0521
 */
exports.commentsTool_0521 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0521:', error);
    throw error;
  }
};
