/**
 * Generated Tool: commentsTool_0335
 * Domain: Comments
 * ID: 0335
 */
exports.commentsTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0335:', error);
    throw error;
  }
};
