/**
 * Generated Tool: commentsTool_0809
 * Domain: Comments
 * ID: 0809
 */
exports.commentsTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0809:', error);
    throw error;
  }
};
