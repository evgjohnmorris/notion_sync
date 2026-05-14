/**
 * Generated Tool: commentsTool_0175
 * Domain: Comments
 * ID: 0175
 */
exports.commentsTool_0175 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0175:', error);
    throw error;
  }
};
