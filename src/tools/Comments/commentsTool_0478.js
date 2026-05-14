/**
 * Generated Tool: commentsTool_0478
 * Domain: Comments
 * ID: 0478
 */
exports.commentsTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0478:', error);
    throw error;
  }
};
