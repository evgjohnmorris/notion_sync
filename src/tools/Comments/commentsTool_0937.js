/**
 * Generated Tool: commentsTool_0937
 * Domain: Comments
 * ID: 0937
 */
exports.commentsTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0937:', error);
    throw error;
  }
};
