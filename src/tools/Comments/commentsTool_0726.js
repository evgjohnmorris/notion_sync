/**
 * Generated Tool: commentsTool_0726
 * Domain: Comments
 * ID: 0726
 */
exports.commentsTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0726:', error);
    throw error;
  }
};
