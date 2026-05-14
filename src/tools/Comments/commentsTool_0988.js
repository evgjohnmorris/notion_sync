/**
 * Generated Tool: commentsTool_0988
 * Domain: Comments
 * ID: 0988
 */
exports.commentsTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0988:', error);
    throw error;
  }
};
