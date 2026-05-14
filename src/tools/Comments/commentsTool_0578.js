/**
 * Generated Tool: commentsTool_0578
 * Domain: Comments
 * ID: 0578
 */
exports.commentsTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0578:', error);
    throw error;
  }
};
