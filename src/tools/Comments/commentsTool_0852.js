/**
 * Generated Tool: commentsTool_0852
 * Domain: Comments
 * ID: 0852
 */
exports.commentsTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0852:', error);
    throw error;
  }
};
