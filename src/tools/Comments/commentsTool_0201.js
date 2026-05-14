/**
 * Generated Tool: commentsTool_0201
 * Domain: Comments
 * ID: 0201
 */
exports.commentsTool_0201 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0201:', error);
    throw error;
  }
};
