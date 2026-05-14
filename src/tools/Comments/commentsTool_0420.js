/**
 * Generated Tool: commentsTool_0420
 * Domain: Comments
 * ID: 0420
 */
exports.commentsTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0420:', error);
    throw error;
  }
};
