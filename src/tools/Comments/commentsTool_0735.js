/**
 * Generated Tool: commentsTool_0735
 * Domain: Comments
 * ID: 0735
 */
exports.commentsTool_0735 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0735:', error);
    throw error;
  }
};
