/**
 * Generated Tool: commentsTool_0488
 * Domain: Comments
 * ID: 0488
 */
exports.commentsTool_0488 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0488:', error);
    throw error;
  }
};
