/**
 * Generated Tool: commentsTool_0419
 * Domain: Comments
 * ID: 0419
 */
exports.commentsTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0419:', error);
    throw error;
  }
};
