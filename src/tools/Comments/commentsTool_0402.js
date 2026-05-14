/**
 * Generated Tool: commentsTool_0402
 * Domain: Comments
 * ID: 0402
 */
exports.commentsTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0402:', error);
    throw error;
  }
};
