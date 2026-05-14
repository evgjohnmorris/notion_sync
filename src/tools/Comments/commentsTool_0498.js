/**
 * Generated Tool: commentsTool_0498
 * Domain: Comments
 * ID: 0498
 */
exports.commentsTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0498:', error);
    throw error;
  }
};
