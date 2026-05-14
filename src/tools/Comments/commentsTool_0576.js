/**
 * Generated Tool: commentsTool_0576
 * Domain: Comments
 * ID: 0576
 */
exports.commentsTool_0576 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0576:', error);
    throw error;
  }
};
