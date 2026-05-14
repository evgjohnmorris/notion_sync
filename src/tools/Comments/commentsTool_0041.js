/**
 * Generated Tool: commentsTool_0041
 * Domain: Comments
 * ID: 0041
 */
exports.commentsTool_0041 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0041:', error);
    throw error;
  }
};
