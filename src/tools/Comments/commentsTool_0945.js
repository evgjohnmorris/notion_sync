/**
 * Generated Tool: commentsTool_0945
 * Domain: Comments
 * ID: 0945
 */
exports.commentsTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0945:', error);
    throw error;
  }
};
