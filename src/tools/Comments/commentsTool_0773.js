/**
 * Generated Tool: commentsTool_0773
 * Domain: Comments
 * ID: 0773
 */
exports.commentsTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0773:', error);
    throw error;
  }
};
