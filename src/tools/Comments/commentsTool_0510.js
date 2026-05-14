/**
 * Generated Tool: commentsTool_0510
 * Domain: Comments
 * ID: 0510
 */
exports.commentsTool_0510 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0510:', error);
    throw error;
  }
};
