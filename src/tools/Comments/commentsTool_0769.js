/**
 * Generated Tool: commentsTool_0769
 * Domain: Comments
 * ID: 0769
 */
exports.commentsTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0769:', error);
    throw error;
  }
};
