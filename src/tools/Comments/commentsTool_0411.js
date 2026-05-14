/**
 * Generated Tool: commentsTool_0411
 * Domain: Comments
 * ID: 0411
 */
exports.commentsTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0411:', error);
    throw error;
  }
};
