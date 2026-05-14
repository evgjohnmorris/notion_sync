/**
 * Generated Tool: commentsTool_0582
 * Domain: Comments
 * ID: 0582
 */
exports.commentsTool_0582 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0582:', error);
    throw error;
  }
};
