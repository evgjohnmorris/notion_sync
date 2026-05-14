/**
 * Generated Tool: commentsTool_0409
 * Domain: Comments
 * ID: 0409
 */
exports.commentsTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0409:', error);
    throw error;
  }
};
