/**
 * Generated Tool: commentsTool_0505
 * Domain: Comments
 * ID: 0505
 */
exports.commentsTool_0505 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0505:', error);
    throw error;
  }
};
