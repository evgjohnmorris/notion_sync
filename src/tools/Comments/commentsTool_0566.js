/**
 * Generated Tool: commentsTool_0566
 * Domain: Comments
 * ID: 0566
 */
exports.commentsTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0566:', error);
    throw error;
  }
};
