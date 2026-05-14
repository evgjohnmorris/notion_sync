/**
 * Generated Tool: commentsTool_0628
 * Domain: Comments
 * ID: 0628
 */
exports.commentsTool_0628 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0628:', error);
    throw error;
  }
};
