/**
 * Generated Tool: commentsTool_0347
 * Domain: Comments
 * ID: 0347
 */
exports.commentsTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0347:', error);
    throw error;
  }
};
