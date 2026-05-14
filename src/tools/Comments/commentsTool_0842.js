/**
 * Generated Tool: commentsTool_0842
 * Domain: Comments
 * ID: 0842
 */
exports.commentsTool_0842 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0842:', error);
    throw error;
  }
};
