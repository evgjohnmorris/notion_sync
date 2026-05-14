/**
 * Generated Tool: commentsTool_0814
 * Domain: Comments
 * ID: 0814
 */
exports.commentsTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0814:', error);
    throw error;
  }
};
