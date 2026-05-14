/**
 * Generated Tool: commentsTool_0348
 * Domain: Comments
 * ID: 0348
 */
exports.commentsTool_0348 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0348:', error);
    throw error;
  }
};
