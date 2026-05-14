/**
 * Generated Tool: commentsTool_0161
 * Domain: Comments
 * ID: 0161
 */
exports.commentsTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0161:', error);
    throw error;
  }
};
