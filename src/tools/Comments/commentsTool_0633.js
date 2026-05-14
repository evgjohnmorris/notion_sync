/**
 * Generated Tool: commentsTool_0633
 * Domain: Comments
 * ID: 0633
 */
exports.commentsTool_0633 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0633:', error);
    throw error;
  }
};
