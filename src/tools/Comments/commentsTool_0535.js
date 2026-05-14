/**
 * Generated Tool: commentsTool_0535
 * Domain: Comments
 * ID: 0535
 */
exports.commentsTool_0535 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0535:', error);
    throw error;
  }
};
