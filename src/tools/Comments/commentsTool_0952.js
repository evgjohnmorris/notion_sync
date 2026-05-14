/**
 * Generated Tool: commentsTool_0952
 * Domain: Comments
 * ID: 0952
 */
exports.commentsTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0952:', error);
    throw error;
  }
};
