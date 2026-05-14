/**
 * Generated Tool: commentsTool_0517
 * Domain: Comments
 * ID: 0517
 */
exports.commentsTool_0517 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0517:', error);
    throw error;
  }
};
