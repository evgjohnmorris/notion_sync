/**
 * Generated Tool: commentsTool_0594
 * Domain: Comments
 * ID: 0594
 */
exports.commentsTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0594:', error);
    throw error;
  }
};
