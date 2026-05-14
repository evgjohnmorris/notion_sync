/**
 * Generated Tool: commentsTool_0859
 * Domain: Comments
 * ID: 0859
 */
exports.commentsTool_0859 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0859:', error);
    throw error;
  }
};
