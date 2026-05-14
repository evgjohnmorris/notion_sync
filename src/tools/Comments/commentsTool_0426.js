/**
 * Generated Tool: commentsTool_0426
 * Domain: Comments
 * ID: 0426
 */
exports.commentsTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0426:', error);
    throw error;
  }
};
