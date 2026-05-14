/**
 * Generated Tool: commentsTool_0564
 * Domain: Comments
 * ID: 0564
 */
exports.commentsTool_0564 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0564:', error);
    throw error;
  }
};
