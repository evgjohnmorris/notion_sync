/**
 * Generated Tool: commentsTool_0396
 * Domain: Comments
 * ID: 0396
 */
exports.commentsTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0396:', error);
    throw error;
  }
};
