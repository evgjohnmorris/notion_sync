/**
 * Generated Tool: commentsTool_0179
 * Domain: Comments
 * ID: 0179
 */
exports.commentsTool_0179 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0179:', error);
    throw error;
  }
};
