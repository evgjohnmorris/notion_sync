/**
 * Generated Tool: commentsTool_0697
 * Domain: Comments
 * ID: 0697
 */
exports.commentsTool_0697 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0697:', error);
    throw error;
  }
};
