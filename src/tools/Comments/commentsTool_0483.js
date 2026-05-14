/**
 * Generated Tool: commentsTool_0483
 * Domain: Comments
 * ID: 0483
 */
exports.commentsTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0483:', error);
    throw error;
  }
};
