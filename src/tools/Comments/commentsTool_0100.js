/**
 * Generated Tool: commentsTool_0100
 * Domain: Comments
 * ID: 0100
 */
exports.commentsTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0100:', error);
    throw error;
  }
};
