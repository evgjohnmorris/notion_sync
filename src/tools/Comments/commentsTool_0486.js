/**
 * Generated Tool: commentsTool_0486
 * Domain: Comments
 * ID: 0486
 */
exports.commentsTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0486:', error);
    throw error;
  }
};
