/**
 * Generated Tool: commentsTool_0880
 * Domain: Comments
 * ID: 0880
 */
exports.commentsTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0880:', error);
    throw error;
  }
};
