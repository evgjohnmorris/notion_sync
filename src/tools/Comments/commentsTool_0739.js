/**
 * Generated Tool: commentsTool_0739
 * Domain: Comments
 * ID: 0739
 */
exports.commentsTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0739:', error);
    throw error;
  }
};
