/**
 * Generated Tool: commentsTool_0412
 * Domain: Comments
 * ID: 0412
 */
exports.commentsTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0412:', error);
    throw error;
  }
};
