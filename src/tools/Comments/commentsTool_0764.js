/**
 * Generated Tool: commentsTool_0764
 * Domain: Comments
 * ID: 0764
 */
exports.commentsTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0764:', error);
    throw error;
  }
};
